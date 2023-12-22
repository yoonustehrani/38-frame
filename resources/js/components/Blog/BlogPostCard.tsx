import { FC, useMemo } from "react";
import { BlogPost } from "./types";
 
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const roundedNumber = (input_number: number) => {
    if (input_number >= 1000) {
        return Math.floor(input_number / 100) / 10 + 'k'
    }
    return input_number
}


const BlogPostCard: FC<BlogPost> = ({title, url, avatar, description, views, author}) => {
    const rotateDegree = useMemo(() => getRandomInt(-2, 2), []);
    console.log(author);
    
    return (
        <div 
            style={{ rotate: rotateDegree + 'deg' }}
            className="bg-creamy shadow-md rounded-b-md py-2 px-3 relative -mt-4 z-10 mb-8 flex flex-col"
            >
                <img src={avatar.uri} className="w-full" alt="" />
                <div className="mt-4 relative grow flex flex-col justify-between">
                    <a href={url}>
                        <h5 className="font-bold text-lg text-gray-800 hover:text-orange-600">{title}</h5>
                    </a>
                    <p className="text-sm text-gray-700 text-justify mt-3 px-1">{description}</p>
                    <div className="flex justify-end">
                        <a className="text-sm font-bold text-center w-fit hover:text-orange-600 hover:border-orange-600 border-transparent text-gray-500 duration-300 rounded-md mt-3 px-4 py-1 border-2 border-dashed" href={url}>بخوانید</a>
                    </div>
                    <hr className="my-3"/>
                    <div className="flex flex-row-reverse items-center justify-between px-2 text-xs">
                        <div className="flex flex-row-reverse gap-2 items-center text-gray-600">
                            <span className="rounded-full overflow-hidden">
                                {/* <img className="h-8 w-8" src={author.avatar} alt={author.username} /> */}
                            </span>
                            <span>{author.username}</span>
                        </div>
                        <div className="flex flex-row-reverse items-center gap-1">
                            <img className="h-5 w-5" src="/images/icons/eye.svg" alt="" />
                            <span className="italic">{roundedNumber(views)}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default BlogPostCard;