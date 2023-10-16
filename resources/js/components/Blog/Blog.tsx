import { FC, useEffect, useState } from "react";
import { BlogPost, mockedPosts } from "./types";
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
    return new Request(ApiConfig).to('posts?limit=4').send()
}

const Blog: FC<BlogProps> = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    useEffect(() => {
        const [httpResponse, cancel] = fetchPosts()
        httpResponse.then(r => {
            if (! r.hasErrors()) {
                setPosts(r.getContent<BlogPost[]>())
            }
        })
        // setPosts(mockedPosts)
    }, []);
    if (posts.length > 0) {
        return (
            <div className="my-8 flex justify-center relative before:z-0 before:no-content before:w-full before:absolute before:h-2 before:bg-rope">
                <div className="grid grid-cols-4 w-3/4 gap-8 font-iran-sans">
                    {posts.map((post) => (
                        <BlogPostCard key={post.id} {...post}/>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Blog;