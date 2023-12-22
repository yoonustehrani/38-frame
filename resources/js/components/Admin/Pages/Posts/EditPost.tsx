import { FC } from "react";
import { editPost, fetchPost } from "./api";
import { useLoaderData } from "react-router-dom";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import Input from "../../../WebPanel/components/Formik/Input";
import TextArea from "../../../WebPanel/components/Formik/TextArea";
import RichTextEditor from "../../../WebPanel/components/Formik/RichTextEditor";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import AvatarPick from "./components/AvatarPick";
import SaveButton from "./components/SaveButton";
import { toast } from "react-toastify";

interface SeoConfig {
    html_title: string | null
    meta_description: string | null
    meta_robots: string | null
}

interface BlogPost {
    id: number
    title: string
    subtitle: string
    description: string
    body: string
    author_id: number
    slug: string
    avatar: any
    seo: SeoConfig
}

async function loader({params}: {params: {postId: string}}): Promise<BlogPost | undefined> {
    const [getPost, cancel] = fetchPost(params.postId)
    const post = (await getPost)
    if (! post.hasErrors()) {
        return post.getContent()
    }
}
 
const EditPost: FC = () => {
    const post = useLoaderData() as (BlogPost)
    async function handleSubmit(values: FormikValues, helpers) {
        const [patchRquest, cancel] = editPost(post.id, values)
        patchRquest.then(res => {
            if (! res.hasErrors()) {
                toast.success('تغییرات با موفقیت ذخیره شدند.')
            } else {
                toast.error(res.getErrorObject()?.response?.message)
            }
        })
    }
    
    return (
        <section>
            <h1 className="font-bold text-2xl">ویرایش مقاله</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                <BreadCrumbItem link="/lab">مقاله ها</BreadCrumbItem>
                <BreadCrumbItem>ویرایش مقاله <span className="font-bold">`{post.title}`</span></BreadCrumbItem>
            </BreadCrumb>
            <div className="w-full flex flex-col-reverse lg:flex-row gap-6">
                <section className="grow flex flex-col gap-6">
                    <Formik
                    initialValues={{ 
                        blogPost: {
                            title: post.title,
                            subtitle: post.subtitle,
                            description: post.description,
                            slug: post.slug
                        }
                    }}
                    onSubmit={handleSubmit}
                    >
                        <Form className="flex flex-col gap-6">
                            <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                                <h2 className="font-bold text-xl mb-4">مشخصات مقاله</h2>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                    <Input name="blogPost[title]" label="عنوان مقاله" id="title" className="mb-3 py-2 px-3" required/>
                                    <Input name="blogPost[subtitle]" label="زیرعنوان" id="subtitle" className="mb-3 py-2 px-3"/>
                                    <Input name="blogPost[slug]" label="شناسه url" id="slug" className="mb-3 py-2 px-3" required/>
                                    <TextArea name="blogPost[description]" label="توضیحات" id="description" className="p-3" required />
                                </div>
                                <div className="mt-6 flex items-center justify-center">
                                    <SaveButton text="ذخیره مشخصات" />
                                </div>
                            </section>
                        </Form>
                    </Formik>
                    <Formik
                    initialValues={{ 
                        blogPost: {
                            body: post.body
                        }
                    }}
                    onSubmit={handleSubmit}
                    >
                        <Form className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">محتوای مقاله</h2>
                            <RichTextEditor name="blogPost[body]" className="col-span-full" required/>
                            <div className="mt-6 flex items-center justify-center">
                                <SaveButton text="ذخیره محتوا" />
                            </div>
                        </Form>
                    </Formik>
                    <Formik
                    initialValues={{ 
                        seo: post.seo
                     }}
                    onSubmit={handleSubmit}
                    >
                        <Form className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
                            <h2 className="font-bold text-xl mb-4">SEO</h2>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <Input name="seo[html_title]" label="عنوان صفحه" id="seo-title" className="mb-3 py-2 px-3"/>
                                <TextArea name="seo[meta_description]" label="متای توضیحات" id="seo-meta-description" className="mb-3 p-3"/>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <SaveButton text="ذخیره تنظیمات" />
                            </div>
                        </Form>
                    </Formik>
                </section>
                <aside className="w-full lg:max-w-sm lg:w-1/3 flex flex-col gap-4">
                    <Formik onSubmit={handleSubmit} initialValues={{ avatar: post.avatar || null }}>
                        <Form>
                            <AvatarPick name="avatar">
                                <SaveButton text="ذخیره تصویر"/>
                            </AvatarPick>
                        </Form>
                    </Formik>
                </aside>
            </div>
        </section>
    )
}
 
export {EditPost as Component, loader};