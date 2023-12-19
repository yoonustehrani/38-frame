import { FC } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import { Formik } from "formik";
import Input from "../../../WebPanel/components/Formik/Input";
import RichTextEditor from "../../../WebPanel/components/Formik/RichTextEditor";
import TextArea from "../../../WebPanel/components/Formik/TextArea";

interface CreatePostProps {
    
}


const formInitialValues = {
    title: '',
    slug: '',
    description: '',
    avatar: '',
    body: '',
    status: ''
}

const CreatePost: FC<CreatePostProps> = () => {
    function handleSubmit() {

    }
    return (
        <section>
            <h1 className="font-bold text-2xl">ایجاد مقاله</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                <BreadCrumbItem link="/lab">لابراتوار</BreadCrumbItem>
                <BreadCrumbItem>ایجاد مقاله</BreadCrumbItem>
            </BreadCrumb>
            <Formik
                initialValues={formInitialValues}
                // validationSchema={registerLabFormValidationSchema}
                onSubmit={handleSubmit}
            >
                <section className="w-full flex flex-wrap flex-col-reverse md:flex-row gap-6">
                    <section className="grow flex flex-col gap-6">
                        <section className="bg-white p-4 shadow-md rounded-md">
                            <h2 className="font-bold text-xl">فرم ایجاد مقاله</h2>
                            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                <Input name="title" label="عنوان مقاله" id="title" className="py-2 px-3" required/>
                                <Input name="subtitle" label="زیرعنوان" id="subtitle" className="py-2 px-3"/>
                                <Input name="slug" label="شناسه url" id="slug" className="py-2 px-3" required/>
                                <TextArea name="description" label="توضیحات" id="description" className="p-3" required />
                                <RichTextEditor name="body" className="col-span-full" label="متن مقاله" required/>
                            </div>
                        </section>
                    </section>
                    <aside className="w-full md:max-w-sm md:w-1/3 flex flex-col gap-4">
                        <section className="bg-white p-4 shadow-md rounded-md">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <div className="h-auto cursor-pointer border border-gray-300 w-48 text-sm text-gray-500 aspect-square rounded-md bg-gray-200 flex justify-center items-center">
                                    انتخاب تصویر اصلی
                                </div>
                                {/* <img height={250} width={250} src="" alt="" /> */}
                            </div>
                        </section>
                    </aside>
                </section>
            </Formik>
        </section>
    );
}
 
export {CreatePost as Component};