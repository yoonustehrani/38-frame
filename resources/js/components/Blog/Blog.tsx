import { FC, useEffect, useState } from "react";
import { BlogPost, mockedPosts } from "./types";
import BlogPostCard from "./BlogPostCard";

interface BlogProps {
    fetchPostsUrl: string
}

const Blog: FC<BlogProps> = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    useEffect(() => {
        setPosts(mockedPosts)
    }, []);
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
 
export default Blog;