import { FC, useContext, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import { Form, Formik, FormikHelpers, FormikValues, useField } from "formik";
import Input from "../../../WebPanel/components/Formik/Input";
import RichTextEditor from "../../../WebPanel/components/Formik/RichTextEditor";
import TextArea from "../../../WebPanel/components/Formik/TextArea";
import AvatarPick from "./components/AvatarPick";
import { createPost } from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CreatePostProps {
    
}


const formInitialValues = {
    blogPost: {
        title: '',
        // slug: '',
        description: '',
        body: '',
        status: 'published',
    },
    avatar: null,
    seo: {
        html_title: '',
        meta_description: ''
    }
}

const CreatePost: FC<CreatePostProps> = () => {
    const navigate = useNavigate()
    async function handleSubmit(values: FormikValues, helpers: FormikHelpers<typeof formInitialValues>) {
        const [submitPost, cancel] = createPost(values)
        submitPost.then(res => {
            if (! res.hasErrors()) {
                toast.success('مقاله با موفقیت ایجاد شد.')
                navigate(`/posts`)
            }
            const error = res.hasErrors() && res.getErrorObject()
            if (error) {
                const serverError = error.response as {message: string, errors?: {[key: string]: string[]}}
                toast.error(serverError.message, {
                    style: {direction: 'rtl', textAlign: 'right'}
                })
                Object.entries(serverError?.errors || {}).forEach(([fieldKey, errors], i) => {
                    setTimeout(() => {
                        errors.forEach((e, j) => {
                            setTimeout(() => {
                                toast.error(e, {
                                    style: {direction: 'rtl', textAlign: 'right'}
                                })
                            }, j * 500);
                        })
                    }, i * 300);
                })
                return
            }
            console.log(res.getErrorObject());
        })
    }
    return (
        <section>
            <h1 className="font-bold text-2xl">ایجاد مقاله</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                <BreadCrumbItem link="/posts">مقاله ها</BreadCrumbItem>
                <BreadCrumbItem>ایجاد مقاله</BreadCrumbItem>
            </BreadCrumb>
            <Formik
                initialValues={formInitialValues}
                // validationSchema={registerLabFormValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="w-full flex flex-col-reverse lg:flex-row gap-6">
                    <section className="grow flex flex-col gap-6">
                        <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">فرم ایجاد مقاله</h2>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <Input name="blogPost[title]" label="عنوان مقاله" id="title" className="mb-3 py-2 px-3" required/>
                                <Input name="blogPost[subtitle]" label="زیرعنوان" id="subtitle" className="mb-3 py-2 px-3"/>
                                {/* <Input name="slug" label="شناسه url" id="slug" className="mb-3 py-2 px-3" required/> */}
                                <TextArea name="blogPost[description]" label="توضیحات" id="description" className="p-3" required />
                                
                            </div>
                        </section>
                        <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">محتوای مقاله</h2>
                            <RichTextEditor name="blogPost[body]" className="col-span-full" required/>
                        </section>
                        <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">SEO</h2>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <Input name="seo[html_title]" label="عنوان صفحه" id="seo-title" className="mb-3 py-2 px-3"/>
                                <TextArea name="seo[meta_description]" label="متای توضیحات" id="seo-meta-description" className="mb-3 p-3"/>
                            </div>
                        </section>
                    </section>
                    <aside className="w-full lg:max-w-sm lg:w-1/3 flex flex-col gap-4">
                        <AvatarPick name="avatar"/>
                        <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">اقدامات</h2>
                            <div className="flex flex-row justify-start items-center gap-4">
                                <button type="submit" role="button" className="text-sm border font-bold border-dashed hover:border-solid hover:bg-x-green hover:text-white border-x-green text-x-green px-3 py-2 rounded-md duration-300">
                                    انتشار
                                </button>
                                <button type="button" role="button" className="text-sm border font-bold border-dashed hover:border-solid hover:bg-gray-800 hover:text-white border-gray-800 text-gray-800 px-3 py-2 rounded-md duration-300">
                                    باشه بعدا
                                </button>
                            </div>
                        </section>
                    </aside>
                </Form>
            </Formik>
        </section>
    );
}


{/* عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.
حداکثر حجم فایل:‌ 500 کیلوبایت */}
{/* <img height={250} width={250} src="" alt="" /> */}

export {CreatePost as Component};