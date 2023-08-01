<nav class="grow-0 flex items-center gap-4 px-4 justify-between h-20 bg-x-green/80 shadow-md w-[90%] mt-4 animate__animated animate__backInDown {{ $classNames ?? '' }}">
    <div class="flex gap-4 h-full">
        <div class="h-full py-2">
            <img 
                src="/images/logo-100w.webp"
                sizes="(max-width: 600px) 100w, 300w"
                srcset="/images/logo-100w.webp 100w, /images/logo-300w.webp 300w"
                alt="38Frame Logo"
                class="h-full w-auto"
            >
        </div>
        <ul class="hidden lg:flex w-fit h-full justify-start items-center content-center gap-8 text-slate-50 font-semibold text-lg">
            <li>
                <a href="{{ route('pages.home') }}">صفحه اصلی</a>
            </li>
            <li>
                <a href="#">تاریکخانه ها / تعمیرکاران</a>
            </li>
            <li class="relative before:bg-x-grey before:delay-150 before:rotate-180 before:pointy-triangle before:middle-10px before:bottom-3 h-full flex items-center">
                <a data-has-sub href="#">فروشگاه ۳۸ فریم</a>
                <div class="hidden delay-500 absolute z-20 top-full -right-10 -mt-3 grid-cols-3 gap-1 w-[800px] bg-x-grey rounded-md p-1 text-black">
                    <ul class="grid grid-flow-row place-items-center place-content-center gap-2 hover:cursor-default">
                        <li class="pointer-menu-item active">
                            <span>خرید فیلم عکاسی</span>
                            <p class="text-xs text-gray-700">برای خرید انواع فیلم‌های عکاسی آنالوگ از فروشندگان مختلف</p>
                        </li>
                        <li class="pointer-menu-item">
                            <span>خرید دوربین آنالوگ</span>
                            <p class="text-xs text-gray-700">جهت خرید انواع دوربین‌های عکاسی آنالوگ از فروشندگان مطمئن</p>
                        </li>
                        <li class="pointer-menu-item">
                            <span>خرید تجهیزات تاریکخانه</span>
                            <p class="text-xs text-gray-700">خرید لوازم با هدف تامین تجهیزات تاریکخانه‌های شخصی و غیر شخصی</p>
                        </li>
                        <li class="pointer-menu-item">
                            <span>خرید تجهیزات آنالوگ</span>
                            <p class="text-xs text-gray-700">برای استفاده شما عکاسان آنالوگ و علاقه‌مندان به گرین</p>
                        </li>
                    </ul>
                    <div class="bg-stone-100 rounded-sm col-span-2 py-3 px-4">
                        {{-- 1 --}}
                        <ul class="grid grid-cols-2 gap-4 animate__animated animate__fadeIn">
                            <x-menu-sub-item icon="001-film-roll" subtitle="فیلم آنالوگ برای انواع دوربین">فیلم عکاسی رنگی</x-menu-sub-item>
                            <x-menu-sub-item icon="001-film-roll-bnw" subtitle="انواع فیلم آنالوگ سیاه و سفید">فیلم عکاسی سیاه و سفید</x-menu-sub-item>
                            <x-menu-sub-item icon="025-film-reel" subtitle="ویژه مدیوم فرمت">فیلم قطع متوسط 120</x-menu-sub-item>
                            <x-menu-sub-item icon="032-camera roll" subtitle="ویژه دوربین 135">فیلم 135 میلی متری</x-menu-sub-item>
                            <x-menu-sub-item icon="049-photo camera" subtitle="کاغذ عکاسی چاپ فوری">فیلم عکاسی پولاروید</x-menu-sub-item>
                        </ul>
                        {{-- 2 --}}
                        <ul class="hidden grid grid-cols-2 gap-4 animate__animated animate__fadeIn">
                            <x-menu-sub-item icon="014-camera" subtitle="نشونه بگیر و شلیک کن!">خرید دوربین پوینت اند شوت</x-menu-sub-item>
                            <x-menu-sub-item icon="006-camera" subtitle="از تمام مکانیکی تا موتور فوکوس">خرید دوربین SLR</x-menu-sub-item>
                            <x-menu-sub-item icon="025-old camera" subtitle="دوربینی با لنزهای دوقلو">خرید دوربین TLR</x-menu-sub-item>
                            <x-menu-sub-item icon="020-camera" subtitle="بهترین برای عکاسی خیابانی">خرید دوربین رنج فایندر</x-menu-sub-item>
                            <x-menu-sub-item icon="044-instant camera" subtitle="انواع دوربین های چاپ فوری">خرید دوربین پولاروید</x-menu-sub-item>
                            <x-menu-sub-item icon="042-tripod" subtitle="انوان دوربین قطع متوسط">خرید دوربین مدیوم فرمت</x-menu-sub-item>
                            <x-menu-sub-item icon="030-camera" subtitle="انواع دوربین فرمت بزرگ">خرید دوربین لارج فرمت</x-menu-sub-item>
                            <x-menu-sub-item icon="034-charging" subtitle="راحت، خانگی، قابل حمل">خرید دوربین کامپکت</x-menu-sub-item>
                        </ul>
                        {{-- 3 --}}
                        <ul class="hidden grid grid-cols-2 gap-4 animate__animated animate__fadeIn">
                            <x-menu-sub-item icon="033-accessory" subtitle="انواع داروهای ایلفورد، کداک و...">خرید دارو ظهور و ثبوت آنالوگ</x-menu-sub-item>
                            <x-menu-sub-item icon="040-photography" subtitle="از تانک ظهور تا گیره تاریکخانه">خرید تجهیزات جانبی تاریکخانه</x-menu-sub-item>
                        </ul>
                        {{-- 4 --}}
                        <ul class="hidden grid grid-cols-2 gap-4 animate__animated animate__fadeIn">
                            <x-menu-sub-item icon="018-lens" subtitle="زایس، نیکون، کنون، هلیوس و...">خرید لنز دوربین آنالوگ</x-menu-sub-item>
                            <x-menu-sub-item icon="015-flash" subtitle="انواع فلاش های اکسترنال">خرید فلاش دوربین آنالوگ</x-menu-sub-item>
                            <x-menu-sub-item icon="046-cable" subtitle="کفشک دوربین، درپوش لنز و ...">خرید لوازم جانبی دوربین آنالوگ</x-menu-sub-item>
                            <x-menu-sub-item icon="032-frames" subtitle="پوستر، کیف دوربین، قوطی فیلم و ...">خرید اکسسوری عکاس</x-menu-sub-item>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <a href="{{ route('pages.about') }}">درباره ما</a>
            </li>
            <li>
                <a href="{{ route('pages.contact') }}">تماس با ما</a>
            </li>
            <li>
                <a href="#">ژورنال عکاسی</a>
            </li>
            <li>
                <a href="#">وبلاگ</a>
            </li>
        </ul>
    </div>
    <div class="flex items-center gap-2">
        <a class="pl-3 pr-1 py-1 shadow-md rounded-full bg-slate-100 h-fit flex justify-center items-center" href="#login">
            <img height="32" width="32" src="{{ asset('/icons/009-lock.svg') }}" alt="">
            <span>ورود</span>
        </a>
        <a class="pl-3 pr-1 py-1 shadow-md rounded-full bg-slate-100 h-fit flex justify-center items-center" href="#login">
            <img height="32" width="32" src="{{ asset('/icons/006-door key.svg') }}" alt="">
            <span>ثبت نام</span>
        </a>
    </div>
    {{ $slot }}
</nav>