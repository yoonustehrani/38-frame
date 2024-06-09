import { FC, FormEventHandler, Reducer, useReducer } from "react";
import { socialMediaActionTypes as MEDIA, socialMediaNames, socialMediaObject, socialMediaReducerAction } from "./types";
import { ActionFunction, Form, useNavigation, useSubmit } from "react-router-dom";
import { setUserSocialMediaSettings } from "./api";
import InstagramIcon from "../../../Icons/Social/InstagramIcon";

const action: ActionFunction = async ({request}) => {
    let data = await request.formData();
    data.append('_method', 'patch')
    let [HttpRequest] = setUserSocialMediaSettings(data)
    const response = await HttpRequest
    if (response.hasErrors()) {
        console.log(response.getErrors())
    } else {
        console.log(response.getContent())
    }
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('')
    //     }, 5000)
    // });
    return {
        okay: true
    }
}

const reducer: Reducer<socialMediaObject, socialMediaReducerAction> = (state, action) => {
    if (action.type === 'SET_SOCIAL') {
        return {...state, ...action.payload}
    }
    return state
}

const SocialSettings: FC = () => {
    const submitting = useNavigation().state === 'submitting'
    // console.log(navigation.state);
    // const [socialMedia, dispatch] = useReducer(reducer, {
    //     instagram: '',
    //     youtube: '',
    //     telegram_channel: '',
    //     telegram_account: ''
    // })
    // const setSocialMedia = (key: socialMediaNames, url: string) => dispatch({type: 'SET_SOCIAL', payload: {[key]: url}})
    return (
        <section className="w-full lg:w-3/4 border border-black/5 shadow-md rounded-lg py-5 px-5 mt-4">
            {/* action="/settings/social" method="post" */}
            <Form method="post" className="w-full grid grid-cols-2 gap-4 [direction:ltr]">
                <div className="relative h-fit flex">
                    <div className="h-full w-10 absolute top-0 flex items-center pl-3">
                        <InstagramIcon />
                    </div>
                    <input 
                        // onChange={e => setSocialMedia(MEDIA.INSTAGRAM, e.target.value)}
                        name="instagram"
                        type="text" placeholder="آیدی اینستاگرام شما" className="form-input ltr py-2 pt-3 pr-3 pl-12"/>
                </div>
                <div className="relative h-fit flex">
                    <div className="h-full w-10 absolute top-0 flex items-center pl-3">
                        <svg height="24" viewBox="0 -77 512.00213 512" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_1384060"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"></path><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"></path></svg>
                    </div>
                    <input 
                        // onChange={e => setSocialMedia(MEDIA.YOUTUBE, e.target.value)}
                        name="youtube"
                        type="text" className="form-input ltr py-2 pt-3 pr-3 pl-12" placeholder="کانال یوتیوب شما"/>
                </div>
                <div className="relative h-fit flex">
                    <div className="h-full w-10 absolute top-0 flex items-center pl-3">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_2111644"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" fill="#039be5"></path></svg>
                    </div>
                    <input 
                        // onChange={e => setSocialMedia(MEDIA.TELEGRAM_CHANNEL, e.target.value)}
                        name="telegram[channel]"
                        type="text" className="form-input ltr py-2 pt-3 pr-3 pl-12" placeholder="کانال یا گروه تلگرامی شما"/>
                </div>
                <div className="relative h-fit flex">
                    <div className="h-full w-10 absolute top-0 flex items-center pl-3">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_2111644"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" fill="#039be5"></path></svg>
                    </div>
                    <input 
                        // onChange={e => setSocialMedia(MEDIA.TELEGRAM_ACCOUNT, e.target.value)}
                        name="telegram[account]"
                        type="text" className="form-input ltr py-2 pt-3 pr-3 pl-12" placeholder="اکانت تلگرام شما"/>
                </div>
                <div className="flex justify-center col-span-full">
                    <button disabled={submitting} type="submit" className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                        {submitting ? 'در حال ذخیره سازی' : 'ذخیره تغییرات'}
                    </button>
                </div>
            </Form>
        </section>
    );
}

export {SocialSettings as Component, action};