import { FC, FormEventHandler, useLayoutEffect, useReducer, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import { fetchSiteCategories } from "./api";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { UploadingFiles, SiteCategory, initialFormValues } from "./types";
import { provideAdReducer } from "./reducer";
import CreateAdForm from "./CreateAdForm";

const CreateAd: FC = () => {
    const [categories, setCategories] = useState<SiteCategory[]>()
    const [newAdData, dispatch] = useReducer(provideAdReducer, initialFormValues)
    const [files, setFiles] = useState<UploadingFiles[]>([])
    const handleFiles: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (! e.target.files || files.length + e.target.files.length > 10) {
            return
        }
        let pickedFiles = e.target.files
        let newFiles = Array.from(pickedFiles).map(file => {
            let sizeInKb = file.size / 1024
            return {
                file: file,
                allowed: sizeInKb <= 500,
                src: URL.createObjectURL(file),
                name: file.name,
                sizeInKb
            }
        })
        setFiles(prevFiles => ([...newFiles.slice(0, 10), ...prevFiles]))
    }
    const handleRemoveFile: React.MouseEventHandler<HTMLButtonElement> = e => {
        let src = e.currentTarget.getAttribute('data-src') as string
        URL.revokeObjectURL(src)
        setFiles(prevFiles => prevFiles.filter(f => f.src !== src))
    }
    useLayoutEffect(() => {
        const [request, cancel] = fetchSiteCategories()
        request.then(res => {
            if (! res.hasErrors()) {
                setCategories(res.getContent<SiteCategory[]>())
            }
        })
        return () => cancel()
    }, [])
    const handleFormSubmit: FormEventHandler = e => {
        e.stopPropagation()
        console.log(newAdData);
    }
    return (
        <ThemeProvider theme={createTheme({typography: {fontFamily: 'IranSansWeb',},})}>
            <h1 className="font-bold text-2xl">ایجاد آگهی جدید</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                <BreadCrumbItem link="/ads">آگهی ها</BreadCrumbItem>
                <BreadCrumbItem>آگهی جدید</BreadCrumbItem>
            </BreadCrumb>
            <section className="w-full xl:w-3/4 2xl:w-3/5 border border-black/5 shadow-md rounded-lg py-3 px-6">
                <h2 className="font-semibold text-xl text-gray-800 mt-4 mb-12 svg-inherit col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                        <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"/>
                    </svg>
                    {` `}
                    فرم ایجاد آگهی در ۳۸ فریم
                </h2>
                {categories && (
                    <CreateAdForm 
                        handleSubmit={handleFormSubmit}
                        dispatch={dispatch}
                        handleAddFiles={handleFiles}
                        handleRemoveFile={handleRemoveFile}
                        categories={categories}
                        files={files}
                    />
                )}
            </section>
        </ThemeProvider>
    );
}
 
export default CreateAd;