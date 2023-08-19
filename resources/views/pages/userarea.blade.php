<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ناحیه کاربری</title>
    @vite('resources/css/app.css')
</head>
<body class="h-full w-full overflow-hidden flex">
    <aside class="h-full shrink-0 overflow-x-hidden overflow-y-auto border-l border-dashed border-gray-300 px-3 hidden lg:block">
        <section class="py-4 flex justify-center">
            <img width="50" src="/images/logo-300w.webp" alt=""/>
        </section>
        <nav class="font-iran-sans mt-5 userarea-menu">
            <ul class="flex flex-col gap-4 a-full">
                <li>
                    <a href="#1" class="active">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/house-blank')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">داشبورد</span>
                    </a>
                </li>
                <li>
                    <a href="#2">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/coins')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">امور مالی</span>
                    </a>
                </li>
                <li>
                    <a href="#3">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/bags-shopping')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">خریدها</span>
                    </a>
                </li>
                <li>
                    <a href="#3">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/folder-open')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">درخواست های خدمات</span>
                    </a>
                </li>
                {{-- <li><a href="#4"></a></li> --}}
                <li>
                    <a href="#5">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/file')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">مدیریت آگهی ها</span>
                    </a>
                </li>
                <li>
                    <a href="#5">
                        <div class="inline-block h-5 svg-inherit">
                            @php
                                icon('website/sign-out')
                            @endphp
                        </div>
                        <span class="mx-2 text-lg">خروج</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    <main class="h-full grow overflow-x-hidden overflow-y-auto relative">
        <div class="w-full fixed lg:sticky top-0 left-0 z-30 flex flex-row-reverse gap-4 justify-start items-center shadow-md bg-white h-16 px-4">
            <div class="h-12 w-12 rounded-full overflow-hidden cursor-pointer">
                <img class="h-full w-auto" src="https://lh3.googleusercontent.com/a/AAcHTtcj0a4dP5eddufZTseCn5LISSUSSDzdQ10R8fQ6miVnRgtnsY9l9LfRYwOo89k4cSNJLCmARbHvdkilFlwa4Y0wrU4=s288-c-no" alt="">
            </div>
            <div class="h-11 w-11 rounded-full duration-500 hover:bg-yellow-400 hover:fill-gray-900 fill-gray-900 grid place-content-center">
                <div class="h-6 w-6 svg-inherit relative">
                    <span class="absolute -left-1 -top-1 text-xs bg-red-500 text-white h-4 w-4 rounded-full text-center">2</span>
                    @php
                        icon('website/bell')
                    @endphp
                </div>
            </div>
        </div>
        <div class="px-6 py-6 absolute w-full top-16 md:relative md:top-0 font-iran-sans">
            <h1 class="font-bold text-2xl">تنظیمات حساب کاربری</h1>
            <nav class="my-4 text-sm">
                <ul class="flex gap-4 text-gray-700">
                    <li>
                        <a class="hover:text-gray-900 hover:underline underline-offset-8 duration-500" href="#dashboard">ناحیه کاربری</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"/></svg>
                    </li>
                    <li class="text-gray-500">تنظیمات حساب کاربری</li>
                </ul>
            </nav>
            <section class="w-full float-left">
                <section class="w-full lg:w-4/5">
                    <nav class="w-full overflow-x-auto py-6 md:py-4">
                        <ul class="flex flex-nowrap gap-4 text-gray-400 font-semibold w-max snap-x snap-mandatory">
                            <li class="snap-always snap-center"><a class="px-4 py-2 text-gray-700 bg-white border-b-2 border-b-gray-700 rounded-t-lg" href="#tab1">اطلاعات فردی</a></li>
                            <li class="snap-always snap-center"><a class="px-4 py-2" href="#tab2">مالی و بانکی</a></li>
                            <li class="snap-always snap-center"><a class="px-4 py-2" href="#tab3">اطلاعیه ها</a></li>
                            <li class="snap-always snap-center"><a class="px-4 py-2" href="#tab4">شبکه های اجتماعی</a></li>
                            <li class="snap-always snap-center"><a class="px-4 py-2" href="#tab5">امنیت حساب</a></li>
                        </ul>
                    </nav>
                    <section class="w-full mt-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <section class="w-full lg:w-1/3 border border-black/5 shadow-md rounded-xl h-96 flex flex-col gap-8 justify-center items-center">
                            <div class="h-32 w-32 ring-4 ring-x-yellow ring-opacity-30 rounded-full overflow-hidden cursor-pointer">
                                <img class="h-full w-auto" src="https://lh3.googleusercontent.com/a/AAcHTtcj0a4dP5eddufZTseCn5LISSUSSDzdQ10R8fQ6miVnRgtnsY9l9LfRYwOo89k4cSNJLCmARbHvdkilFlwa4Y0wrU4=s288-c-no" alt="">
                            </div>
                            <p class="text-gray-400 text-sm text-center">
                                <span>عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.</span>
                                <br>
                                <span>حداکثر حجم فایل:‌ 500 کیلوبایت</span>
                            </p>
                            <label class="text-gray-700" for="public-profile">
                                دیگران هم میتوانند پروفایل من را ببینند
                                <input id="public-profile" type="checkbox">
                            </label>
                            <button class="text-red-700 text-sm font-semibold px-3 py-2 rounded-xl bg-red-100 hover:bg-red-200 duration-300">حذف عکس پروفایل</button>
                        </section>
                        <section class="w-full lg:w-2/3 border border-black/5 shadow-md rounded-lg py-3 px-5">
                            <form class="grid md:grid-cols-2 gap-6 my-6 pb-6" action="#">
                                <h2 class="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                                    @php
                                        icon('website/user')
                                    @endphp
                                    حساب کاربری
                                </h2>
                                <div>
                                    <div class="relative">
                                        <label for="fullname" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">نام و نام خانوادگی</label>
                                        <input id="fullname" type="text" name="fullname" class="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <label for="username" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">نام کاربری</label>
                                        <input id="username" type="text" name="username" class="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <label for="email" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شماره تلفن</label>
                                        <input id="email" type="email" name="email" class="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <label for="email" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس ایمیل</label>
                                        <input id="email" type="email" name="email" class="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                    </div>
                                </div>
                                <div class="col-span-full flex justify-center">
                                    <button class="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </form>
                            <form class="grid md:grid-cols-2 gap-6 my-6 pb-6" action="#">
                                <h2 class="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                                    @php
                                        icon('website/map-pin')
                                    @endphp
                                    موقعیت مکانی
                                </h2>
                                <div>
                                    <div class="relative">
                                        <label for="fullname" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">استان محل زندگی</label>
                                        <select name="state" id="state" class="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                            <option value="KHZ">خراسان رضوی</option>
                                            <option value="THR">تهران</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <label for="username" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شهر یا روستا</label>
                                        <select name="state" id="state" class="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                            <option value="MHD">مشهد</option>
                                            <option value="THR">تهران</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div class="relative">
                                        <label for="zip" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">کد پستی</label>
                                        <input id="zip" type="zip" name="zip" class="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                    </div>
                                </div>
                                <div class="col-span-full">
                                    <div class="relative">
                                        <label for="address" class="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس محل سکونت</label>
                                        <textarea id="address" type="address" name="address" class="w-3/4 h-32 bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3"></textarea>
                                    </div>
                                </div>
                                <div class="col-span-full flex justify-center">
                                    <button class="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    </main>
</body>
</html>