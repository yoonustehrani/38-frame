import { FC } from "react";

interface UserSettingsProps {
    
}
 
const UserSettings: FC<UserSettingsProps> = () => {
    return (
        <>
            <h1 className="font-bold text-2xl">تنظیمات حساب کاربری</h1>
            <nav className="my-4 text-sm">
                <ul className="flex gap-4 text-gray-700">
                    <li>
                        <a className="hover:text-gray-900 hover:underline underline-offset-8 duration-500" href="#dashboard">ناحیه کاربری</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"/></svg>
                    </li>
                    <li className="text-gray-500">تنظیمات حساب کاربری</li>
                </ul>
            </nav>
            <section className="w-full float-left">
                <section className="w-full lg:w-4/5">
                    <nav className="w-full overflow-x-auto py-6 md:py-4">
                        <ul className="flex flex-nowrap gap-4 text-gray-400 font-semibold w-max snap-x snap-mandatory">
                            <li className="snap-always snap-center"><a className="px-4 py-2 text-gray-700 bg-white border-b-2 border-b-gray-700 rounded-t-lg" href="#tab1">اطلاعات فردی</a></li>
                            <li className="snap-always snap-center"><a className="px-4 py-2" href="#tab2">مالی و بانکی</a></li>
                            <li className="snap-always snap-center"><a className="px-4 py-2" href="#tab3">اطلاعیه ها</a></li>
                            <li className="snap-always snap-center"><a className="px-4 py-2" href="#tab4">شبکه های اجتماعی</a></li>
                            <li className="snap-always snap-center"><a className="px-4 py-2" href="#tab5">امنیت حساب</a></li>
                        </ul>
                    </nav>
                    <section className="w-full mt-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <section className="w-full lg:w-1/3 border border-black/5 shadow-md rounded-xl h-96 flex flex-col gap-8 justify-center items-center">
                            <div className="h-32 w-32 ring-4 ring-x-yellow ring-opacity-30 rounded-full overflow-hidden cursor-pointer">
                                <img className="h-full w-auto" src="https://lh3.googleusercontent.com/a/AAcHTtcj0a4dP5eddufZTseCn5LISSUSSDzdQ10R8fQ6miVnRgtnsY9l9LfRYwOo89k4cSNJLCmARbHvdkilFlwa4Y0wrU4=s288-c-no" alt="" />
                            </div>
                            <p className="text-gray-400 text-sm text-center">
                                <span>عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.</span>
                                <br />
                                <span>حداکثر حجم فایل:‌ 500 کیلوبایت</span>
                            </p>
                            <label className="text-gray-700" htmlFor="public-profile">
                                دیگران هم میتوانند پروفایل من را ببینند
                                <input id="public-profile" type="checkbox" />
                            </label>
                            <button className="text-red-700 text-sm font-semibold px-3 py-2 rounded-xl bg-red-100 hover:bg-red-200 duration-300">حذف عکس پروفایل</button>
                        </section>
                        <section className="w-full lg:w-2/3 border border-black/5 shadow-md rounded-lg py-3 px-5">
                            <form className="grid md:grid-cols-2 gap-6 my-6 pb-6" action="#">
                                <h2 className="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                                        <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                                    </svg>
                                    حساب کاربری
                                </h2>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="fullname" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">نام و نام خانوادگی</label>
                                        <input id="fullname" type="text" name="fullname" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="username" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">نام کاربری</label>
                                        <input id="username" type="text" name="username" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="email" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شماره تلفن</label>
                                        <input id="email" type="email" name="email" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="email" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس ایمیل</label>
                                        <input id="email" type="email" name="email" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                                    </div>
                                </div>
                                <div className="col-span-full flex justify-center">
                                    <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </form>
                            <form className="grid md:grid-cols-2 gap-6 my-6 pb-6" action="#">
                                <h2 className="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/>
                                    </svg>
                                    موقعیت مکانی
                                </h2>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="fullname" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">استان محل زندگی</label>
                                        <select name="state" id="state" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                            <option value="KHZ">خراسان رضوی</option>
                                            <option value="THR">تهران</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="username" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شهر یا روستا</label>
                                        <select name="state" id="state" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                            <option value="MHD">مشهد</option>
                                            <option value="THR">تهران</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label htmlFor="zip" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">کد پستی</label>
                                        <input id="zip" type="zip" name="zip" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <div className="relative">
                                        <label htmlFor="address" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس محل سکونت</label>
                                        <textarea id="address" name="address" className="w-3/4 h-32 bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3"></textarea>
                                    </div>
                                </div>
                                <div className="col-span-full flex justify-center">
                                    <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}
 
export default UserSettings;