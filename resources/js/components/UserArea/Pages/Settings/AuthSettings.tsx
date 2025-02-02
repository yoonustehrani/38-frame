import { FC } from "react";

interface AuthSettingsProps {
    
}
 
const AuthSettings: FC<AuthSettingsProps> = () => {
    return (
        <section className="w-full lg:w-3/4 border border-black/5 shadow-md rounded-lg py-5 px-5 mt-4">
            <form action="#" className="w-full grid grid-cols-2 gap-4 pt-5">
                <h2 className="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="512" height="512" id="fi_2549910" className="ml-1"><g id="_12-Lock" data-name="12-Lock"><path d="M23,12V8.71A6.72,6.72,0,0,0,16.29,2h-.58A6.72,6.72,0,0,0,9,8.71V12a3,3,0,0,0-3,3v9.3A5.71,5.71,0,0,0,11.7,30h8.6A5.71,5.71,0,0,0,26,24.3V15A3,3,0,0,0,23,12ZM11,8.71A4.71,4.71,0,0,1,15.71,4h.58A4.71,4.71,0,0,1,21,8.71V12H11ZM24,24.3A3.7,3.7,0,0,1,20.3,28H11.7A3.7,3.7,0,0,1,8,24.3V15a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1Z"></path><path d="M17,20.72V24a1,1,0,0,1-2,0V20.72a2,2,0,1,1,2,0Z"></path></g></svg>
                    تغییر رمز عبور
                </h2>
                <div className="relative">
                    <label htmlFor="password" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">رمز عبور جدید</label>
                    <input id="password" type="password" name="password" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                </div>
                <div className="relative">
                    <label htmlFor="password_confirmation" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">تکرار رمز عبور</label>
                    <input id="password_confirmation" type="password" name="password_confirmation" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                </div>
                <div className="col-span-full flex justify-center">
                    <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                        ارسال
                    </button>
                </div>
            </form>
            <div className="w-full mt-6 py-4 border-2 border-dashed border-spacing-3 rounded-lg border-red-500/50 flex flex-col items-center justify-center gap-6">
                <div className="flex justify-center items-center">
                    <svg height="50" viewBox="0 0 128 128" width="50" xmlns="http://www.w3.org/2000/svg" id="fi_4201973"><g><path d="m57.362 26.54-37.262 64.535a7.666 7.666 0 0 0 6.639 11.5h74.518a7.666 7.666 0 0 0 6.639-11.5l-37.258-64.535a7.665 7.665 0 0 0 -13.276 0z" fill="#ee404c"></path><g fill="#fff7ed"><rect height="29.377" rx="4.333" width="9.638" x="59.181" y="46.444"></rect><circle cx="64" cy="87.428" r="4.819"></circle></g></g></svg>
                    <h3 className="text-xl text-red-600">
                        محدوده خطر !
                    </h3>
                </div>
                <p className="text-red-500 text-center text-sm m-0">با استفاده از دکمه زیر می توانید حساب کاربری خود در ۳۸فریم را برای همیشه پاک کنید.
                    <br />
                    دقت کنید که پس از حذف حساب کاربری شما <span className="underline underline-offset-8 font-bold">هیچ راهی برای بازگردانی</span> آن وجود نخواهد داشت. 
                </p>
                <button className="text-red-700 text-sm font-semibold px-3 py-2 rounded-xl bg-red-100 hover:bg-red-200 duration-300 mt-2">حذف حساب کاربری</button>
            </div>
        </section>
    );
}
 
export {AuthSettings as Component};