import { FC, useLayoutEffect, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import { fetchPosts } from "./api";
import DataTable, { Thead } from "./components/DataTable/DataTable";
import TableRecord from "./components/DataTable/TableRecord";
import groupActionsContext from "./components/DataTable/groupActionsContext";
import { File as UploadedFile } from "../../FileManager/types";
import { toPersianDateTime } from "./components/DataTable/utils";

interface PostItem {
    id: number
    title: string
    avatar: UploadedFile
    created_at: string
    updated_at: string
}

const Posts: FC = () => {
    const [posts, setPosts] = useState<PostItem[]>()
    const [loading, setLoading] = useState(true)
    
    useLayoutEffect(() => {
        const [requestPosts, cancel] = fetchPosts()
        requestPosts.then(res => {
            setLoading(true)
            if (! res.hasErrors()) {
                setPosts(res.getContent())
            }
            setLoading(false)
        })
        return cancel
    }, [])

    return (
        <section>
            <h1 className="font-bold text-2xl">مدیریت مقاله ها</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">پنل مدیریت</BreadCrumbItem>
                <BreadCrumbItem>لیست مقاله ها</BreadCrumbItem>
            </BreadCrumb>
            <section className="w-full my-6 text-sm">
                <DataTable title="مقاله ها" loading={loading} items={posts || []} newItem={{ link: '/posts/create', title: 'مقاله' }}>
                    <Thead columns={[' ', 'عنوان', 'تاریخ ایجاد', 'آخرین ویرایش']}/>
                    <groupActionsContext.Consumer>
                        {({toggle, items}) => (
                            <>
                                {posts && posts.map((post, index) => (
                                    <tbody key={post.id}>
                                        <tr tabIndex={0} className="focus:outline-none h-16 border border-gray-100 rounded">
                                            <TableRecord>
                                                <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input onChange={() => toggle(post.id)} checked={items.includes(post.id)} placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
                                                </div>
                                            </TableRecord>
                                            <TableRecord>{index + 1}</TableRecord>
                                            <TableRecord>
                                                {post.avatar.thumbnailUri && <img width={50} height={50} src={post.avatar.thumbnailUri} alt="" />}
                                            </TableRecord>
                                            <TableRecord>
                                                <p className="text-base font-medium leading-none text-gray-700">{post.title}</p>
                                            </TableRecord>
                                            <TableRecord>
                                                {toPersianDateTime(post.created_at)}
                                            </TableRecord>
                                            <TableRecord>
                                                {toPersianDateTime(post.updated_at)}
                                            </TableRecord>
                                        </tr>
                                    </tbody>
                                ))}
                            </>
                        )}
                    </groupActionsContext.Consumer>
                </DataTable>
            </section>
        </section>
    );
}
 
export {Posts as Component};