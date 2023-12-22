import { FC, useEffect, useState } from "react";
import { BlogPost } from "./types";
import BlogPostCard from "./BlogPostCard";
import Request from "../../utils/HttpClient/Request";

interface BlogProps {
    fetchPostsUrl: string
}

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

function fetchPosts() {
    return new Request(ApiConfig).to('blog-posts?limit=4').send()
}

const Blog: FC<BlogProps> = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const [httpResponse, cancel] = fetchPosts()
        httpResponse.then(r => {
            if (! r.hasErrors()) {
                setLoading(false)
                setPosts(r.getContent<BlogPost[]>())
            }
        })
        return cancel
    }, []);
    return (
        <div className="flex flex-col items-center justify-center w-full font-iran-sans">
            <div className="flex flex-col-reverse text-center md:text-right justify-center gap-1 w-fit mb-3">
                <div className="flex items-center justify-center gap-3 py-3 px-4">
                    <span className="text-gray-700">&rdquo;جذاب ترین محتوای آنالوگ را اینجا بخوانید&ldquo;</span>
                </div>
                <div>
                    <h2 className="text-[3rem] font-bold w-full underlined-heading">مقالات ۳۸فریم</h2>
                </div>
            </div>
            <div className="w-full my-8 flex justify-center relative before:z-0 before:no-content before:w-full before:absolute before:h-2 before:bg-rope">
                {loading ? (
                    <span className="bg-gray-900/90 text-slate-50 py-4 px-3 rounded-full absolute -top-5">در حال لود کردن</span>
                ) : (
                    <div className="grid grid-cols-4 w-3/4 gap-8 font-iran-sans">
                        {posts.length > 0 && posts.map((post) => (
                            <BlogPostCard key={post.id} {...post}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;