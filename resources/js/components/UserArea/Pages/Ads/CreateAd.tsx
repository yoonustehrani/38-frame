import { FC, useLayoutEffect, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import { fetchSiteCategories, requestAdCreation } from "./api";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CreateAdForm from "./CreateAdForm";
import { SiteCategory, reducerState } from "./types";
// import { adDetailsSchema } from "./validationSchema";
import { ValidationError } from "yup";
import { ActionFunction, LoaderFunction, redirect, useActionData, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

const submitAdToServer: ActionFunction = async ({request}) => {
    let data = await request.formData()
    let [apiRequest, cancel] = requestAdCreation(data)
    const response = await apiRequest
    if (response.hasErrors()) {
        return response.getErrors()
    }
    // return response.getContent()
    return redirect('/ads')
}

const loadAdCategories: LoaderFunction = async () => {
    let categories = null
    try {
        const [request, cancel] = fetchSiteCategories()
        const response = await request
        if (! response.hasErrors()) {
            categories = response.getContent<SiteCategory[]>()
        }
    } catch (error) {
        
    }
    return {categories}
}

const CreateAd: FC = () => {
    const submit = useSubmit()
    const navigation = useNavigation()
    const actionData = useActionData()
    const {categories} = useLoaderData() as {categories: SiteCategory[] | null}

    // useEffect(() => {
    //     if (actionData) {
    //         console.log(actionData?.errors);
    //     }
    // }, [actionData])

    const handleFormSubmit = (data: reducerState) => {
        try {
            // adDetailsSchema.validateSync(data.ad, {strict: true, abortEarly: false})
            const formData = new FormData()
            data.photos.filter(f => f.allowed).map(f => {
                formData.append('photos[]', f.file)
            })
            Object.entries(data.ad).map(([key, value]) => {
                formData.append(`ad[${key}]`, value || '')
            })
            submit(formData, {
                method: 'patch',
                action: '/ads/create',
                encType: 'multipart/form-data'
            })
        } catch (errorPacket) {
            if (errorPacket instanceof ValidationError) {
                
            }
        }
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
                {categories && <CreateAdForm handleSubmit={handleFormSubmit} categories={categories} submitting={navigation.state === 'submitting'}/>}
            </section>
        </ThemeProvider>
    );
}
 
export {CreateAd as Component, submitAdToServer as action, loadAdCategories as loader}