import { FC, ReactNode, useEffect, useState } from "react";
import AttachFile from "../../../AttachFile/AttachFile";
import { FileOverLayContext } from "../../../AttachFile/context";
import { File as UploadedFile } from "../../../FileManager/types";
import { useField } from "formik";

interface AvatarPickProps {
    name: string
    children?: ReactNode
}
 
const AvatarPick: FC<AvatarPickProps> = ({name, children}) => {
    const [avatarField, avatarhelper, controlAvatar] = useField({name})
    const [avatar, setAvatar] = useState<UploadedFile>(avatarhelper.initialValue)

    useEffect(() => {
        if (avatar) {
            controlAvatar.setValue(avatar.id)
        }
    }, [avatar])

    return (
        <section className="border border-black/5 bg-white px-6 py-8 shadow-md rounded-lg">
            <h2 className="font-bold text-xl mb-4">تصویر مقاله</h2>
            <div className="flex flex-col justify-center items-center gap-4">
                {avatar && (
                    <a href={avatar.uri} target="_blank">
                        <img className="rounded-md border shadow-md mb-4" width={150} src={avatar.thumbnailUri || avatar.uri} alt="" />
                    </a>
                )}
                <AttachFile className="inline-block" multiSelect={false} onSelect={(file) => setAvatar(file)}>
                    <div className="flex flex-row justify-start items-center gap-4">
                        <FileOverLayContext.Consumer>
                            {({show, hide, toggle}) => {
                                return (
                                    <button onClick={show} type="button" role="button" className="text-sm font-bold border border-dashed hover:border-solid hover:bg-x-yellow hover:text-gray-800 border-x-yellow text-x-yellow px-3 py-2 rounded-md duration-300">
                                    {`${avatar ? 'تغییر' : 'انتخاب'} تصویر اصلی`}
                                    </button>
                                )
                            }}
                        </FileOverLayContext.Consumer>
                        {children}
                    </div>
                </AttachFile>
                
            </div>
        </section>
    );
}
 
export default AvatarPick;