import { FC } from "react";
import Input from "../../../../components/Formik/Input";
import FormSubtitle from "../../../../components/FormSubtitle";
import { Checkbox } from "@mui/material";
import { useField } from "formik";

interface ContactInfoFormProps {
    
}
 
const ContactInfoForm: FC<ContactInfoFormProps> = () => {
    const [onlySmsField] = useField({type: 'checkbox', name: 'meta[onlySms]'})
    return (
        <>
            <Input required type="text" name="phone_number" id="phone_number" label="تلفن همراه" className="ltr p-3">
                <div className="w-full flex items-center mt-2 px-2">
                    <label className="text-gray-700 font-bold text-xs cursor-pointer" htmlFor="sms-only">فقط از طریق پیامک پاسخگو هستم.</label>
                    <Checkbox {...onlySmsField} id="sms-only" color="default" size="small"/>
                </div>
            </Input>
            <Input type="text" name="address_line" id="address_line" label="تلفن ثابت" className="ltr p-3" />
            <FormSubtitle text="شبکه های اجتماعی" className="text-sm"/>
            <Input type="text" name="meta[social][instagram]" id="instagram" label="صفحه اینستاگرامی لابراتوار" className="p-3 pl-12 ltr">
                <div className="h-12 w-10 absolute left-0 top-0 flex justify-center items-center pl-2">
                    <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="fi_2111463">
                        <linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047">
                            <stop offset="0" stopColor="#fd5"></stop>
                            <stop offset=".5" stopColor="#ff543e"></stop>
                            <stop offset="1" stopColor="#c837ab"></stop>
                        </linearGradient>
                        <path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"></path><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"></path>
                    </svg>
                </div>
            </Input>
            <Input type="text" name="meta[social][telegram_channel]" id="telegram_channel" label="کانال تلگرامی لابراتوار" className="p-3 pl-12 ltr">
                <div className="h-12 w-10 absolute left-0 top-0 flex justify-center items-center pl-2">
                    <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_2111644"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" fill="#039be5"></path></svg>
                </div>
            </Input>
        </>
    );
}
 
export default ContactInfoForm;