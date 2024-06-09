import { FC, Suspense, lazy, useMemo, useState } from "react";
import { formGeneralErrorsContext } from "../../context/formContext";
import BreadCrumb, { BreadCrumbItem } from "../BreadCrumb";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { Canceler } from "axios";
import { Level } from "./types";
import FormTopNav from "./FormTopNav";
import FormSubtitle from "../FormSubtitle";
import BottomLevelController from "./BottomLevelController";

interface LeveledFormProps {
    pageTitle: string
    formTitle: string
    breadCrumbs: [string, string|undefined][]
    levels: Level[]
    handleSubmit: (values: FormikValues, helpers: any) => (Promise<Canceler | undefined> | void)
    validationSchema?: any
}
 
const LeveledForm: FC<LeveledFormProps> = ({breadCrumbs, levels, pageTitle, handleSubmit, formTitle, validationSchema}) => {
    const [level, setLevel] = useState(0)
    const [displayAllErrors, setDisplayAllErrors] = useState(false)
    if (level > levels.length) return null
    const formInitialValues = useMemo(() => Object.fromEntries(levels.flatMap(x => Object.entries(x.initialValues))), [levels])
    const CurrentLevelComponent = lazy(levels[level].lazy)
    const nextLevel = level < (levels.length - 1) ? () => { 
        setLevel(l => l + 1)
     } : undefined
    const prevLevel = level > 0 ? () => { setLevel(l => l - 1) } : undefined
    return (
        <formGeneralErrorsContext.Provider value={displayAllErrors}>
            <section>
                <h1 className="font-bold text-2xl">{pageTitle}</h1>
                <BreadCrumb>
                    <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                    {breadCrumbs.map(([title, link]) => (
                        <BreadCrumbItem key={title} link={link}>{title}</BreadCrumbItem>
                    ))}
                </BreadCrumb>
                <section className="w-full xl:w-3/4 2xl:w-3/5 border border-black/5 shadow-md rounded-lg p-6">
                    <h2 className="font-semibold text-xl text-gray-800 mt-4 mb-6 svg-inherit col-span-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                            <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"/>
                        </svg>
                        {` ${formTitle}`}
                    </h2>
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({errors, submitForm}) => {
                            return (
                                <>
                                    <FormTopNav level={level} setLevel={setLevel} levels={levels} errors={errors} displayErrors={displayAllErrors}/>
                                    <Form onSubmit={e => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setDisplayAllErrors(true)
                                        submitForm()
                                    }} noValidate className={"grid lg:grid-cols-2 gap-8 px-6 fadeIn"}>
                                        <FormSubtitle className="mb-3 text-xl" text={levels[level].title}/>
                                        <Suspense fallback={<>در حال لود کردن</>}>
                                            <CurrentLevelComponent/>
                                        </Suspense>
                                        <BottomLevelController nextLevel={nextLevel} prevLevel={prevLevel}/>
                                    </Form>
                                </>
                            )
                        }}
                    </Formik>
                </section>
            </section>
        </formGeneralErrorsContext.Provider>
    );
}
 
export default LeveledForm;