<x-layout title="38Frame website">
    <x-header/>
    <section data-animation="bounceInUp" class="opacity-0 w-4/5 mx-[10%] grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 py-4 md:py-8">
        <div class="md:col-span-2 font-iran-sans">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-2 h-fit">
                <div class="h-20 w-20">@php icon('077-photo camera') @endphp</div>
                <div class="text-center">
                    <span class="text-gray-700">&rdquo;خدمات ما چیست ؟&ldquo;</span>
                    <h2 class="text-[3rem] font-bold">خدمات ۳۸ فریم</h2>
                </div>
            </div>
            <p class="mt-4 md:mt-0 md:w-2/3 text-gray-900 text-justify pr-2">۳۸ فریم به معرفی لابراتوار‌ها و تاریکخانه‌های عکاسی آنالوگ می‌پردازد و امکان خرید و فروش تجهیزات و لوازم عکاسی آنالوگ برای شیفتگان عکاسی آنالوگ را فراهم ساخته است. در «۳۸فریم» مایحتاج آنالوگ مهیا است و همچنین می‌توانید در ژورنال۳۸فریم نمایه های آنالوگ خود را منتشر کنید!</p>
        </div>
        <div class="py-4">
            <div class="bg-white w-40 h-[10.5rem] border border-black/10 shadow-md -rotate-6 flex flex-col items-start justify-center px-2 py-3">
                <img 
                    src="/images/logo-100w.webp"
                    sizes="(max-width: 600px) 100w, 300w"
                    srcset="/images/logo-100w.webp 100w, /images/logo-300w.webp 300w"
                    alt="38Frame Logo"
                    class="h-auto w-full bg-gray-200 p-2"
                >
                <span class="block w-full text-center pt-3 text-x-dark-blue font-bold [direction:ltr]">#filmisalive</span>
            </div>
        </div>
    </section>
    <div class="w-full py-4 overflow-x-hidden">
        <section class="w-screen md:rotate-1 h-fit bg-[#111] py-3 flex justify-center items-center flex-col gap-1 overflow-hidden">
            <div class="px-2 bg-squares h-full md:h-5 w-4 md:w-full bg-repeat-y md:bg-repeat-x"></div>
            <section class="md:w-4/5 md:mx-[10%] grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 font-iran-sans service-list">
                <div data-animation="bounceInRight" class="rounded-md overflow-hidden relative">
                    <img src="/images/service-camera-shop.webp" alt="">
                    <div class="absolute w-full text-center bg-x-yellow/90 bottom-0 left-0 flex flex-col items-center justify-center gap-4 h-16 px-4">
                        <span class="text-2xl -mt-3 font-semibold">خرید و فروش تجهیزات آنالوگ</span>
                        <p class="hidden text-gray-800">
                            ۳۸ فریم یک بازار تخصصی برای خرید و فروش لوازم عکاسی آنالوگ مانند دوربین، فیلم، دارو ظهور و... است. هر کسی می‌تواند در ۳۸فریم خرید و فروش کند!
                            <br>
                            <a class="inline-flex items-center gap-2 mt-2 hover:text-black" href="#">می‌خواهم فروشنده شوم
                                <x-icon-left-arrow size="16"/>
                            </a>
                        </p>
                    </div>
                </div>
                <div data-animation="bounceInUp" class="rounded-md overflow-hidden relative">
                    <img src="/images/service-darkroom.webp" alt="">
                    <div class="absolute w-full text-center bg-x-yellow/90 bottom-0 left-0 flex flex-col items-center justify-center gap-4 h-16 px-4">
                        <a href="{{ route('pages.labs.index') }}"><span class="text-2xl -mt-3 font-semibold">معرفی تاریکخانه و تعمیرکاران</span></a>
                        <p class="hidden text-gray-800">ما به معرفی خدمات تعمیرکاران، لابراتوار‌ها و تاریکخانه ها مانند ظهور و اسکن در همه شهرها می‌پردازیم و خدمات آن ها را به لحاظ کیفیت و هزینه مقایسه می‌کنیم.</p>
                    </div>
                </div>
                <div data-animation="bounceInLeft" class="rounded-md overflow-hidden relative">
                    <img src="/images/service-photographer-journal.webp" alt="">
                    <div class="absolute w-full text-center bg-x-yellow/90 bottom-0 left-0 flex flex-col items-center justify-center gap-4 h-16 px-4">
                        <span class="text-2xl -mt-3 font-semibold">بازنشر نمایه های شما!</span>
                        <p class="hidden text-gray-800">
                            با «ژورنال ۳۸فریم» می‌توانید نمایه های آنالوگ خود را منتشر کنید، آن ها را در آرشیو خود و لابراتوارها قرار دهید و به خانواده عکاسان آنالوگ ایرانی ملحق شوید.
                            <br>
                            <a class="inline-flex items-center gap-2 mt-2 hover:text-black" href="#">ورود به ژورنال ۳۸فریم
                                <x-icon-left-arrow size="16"/>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <div class="px-2 bg-squares md:w-full h-full w-4 md:h-5 bg-repeat-y md:bg-repeat-x"></div>
        </section>
    </div>
    <section data-animation="zoomIn" class="w-4/5 mx-[10%] flex flex-col md:flex-row justify-start gap-4 py-8 my-6 font-iran-sans">
        <div class="flex flex-col-reverse text-center md:text-right justify-center gap-1">
            <div class="flex items-center justify-start gap-3 px-4">
                <div class="h-20 w-24 flex items-center">@php icon('066-photo camera') @endphp</div>
                <span class="text-gray-700">&rdquo;ما چه کار می‌کنیم؟&ldquo;</span>
            </div>
            <div>
                <h2 class="text-[3rem] font-bold w-full underlined-heading">درباره ۳۸ فریم</h2>
            </div>
        </div>
        <p class="w-full md:w-2/3 text-gray-900 flex flex-col justify-center text-justify pr-2">
            <span class="font-bold text-xl">آنالوگ، زنده است! </span>
            «عکاسی آنالوگ زنده است و نبض دارد.» این باور ما در 38فریم است. ما خوره و نِردهای آنالوگ هستیم. ما از گرین ساخته شدیم و داخل سایت 38فریم به هر چیزی در خصوص عکاسی آنالوگ می‌پردازیم. 38فریم حامی جریان عکاسی آنالوگ در ایران است. از معرفی لابراتوار ها و ایجاد یک بازار برای خرید و فروش آسون تجهیزات آنالوگ تا هر چیزی برای حمایت از آنالوگ.
            <a class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="{{ route('pages.labs.index') }}">ما را بیشتر بشناسید
                <x-icon-left-arrow size="16"/>
            </a>
        </p>
    </section>
    <div class="w-full py-4 overflow-x-hidden">
        <section class="bg-x-dark-blue w-screen md:w-[101%] md:-rotate-1 flex justify-center py-6 font-iran-sans">
            <div data-animation="slideInRight" class="w-4/5 grid grid-cols-1 md:grid-cols-3 place-content-center gap-4">
                <div class="h-64 md:h-72 rounded-md bg-blue-100 flex flex-col gap-3 md:gap-6 justify-center items-center">
                    <div class="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-6">
                        <div class="h-32 w-auto">@php icon('computer') @endphp</div>
                        <span class="text-4xl font-bold" data-count-to="200">۰</span>
                    </div>
                    <span class="text-xl font-bold">فروشنده در سایت ما هستند</span>
                </div>
                <div class="h-64 md:h-72 rounded-md bg-blue-200 flex flex-col gap-3 md:gap-6 justify-center items-center">
                    <div class="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-6">
                        <div class="h-32 w-auto">@php icon('studio') @endphp</div>
                        <span class="text-4xl font-bold pt-4" data-count-to="25">۰</span>
                    </div>
                    <span class="text-xl font-bold">تاریکخانه در ایران فعال هستند</span>
                </div>
                <div class="h-64 md:h-72 rounded-md bg-blue-300 flex flex-col gap-3 md:gap-6 justify-center items-center">
                    <div class="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-6">
                        <div class="h-32 w-auto">@php icon('photography') @endphp</div>
                        <span class="text-4xl font-bold" data-count-to="1000">۰</span>
                    </div>
                    <span class="text-xl font-bold">عکاس آنالوگ در 38فریم هستند</span>
                </div>
            </div>
        </section>
    </div>
    <section class="my-6 w-full md:w-3/5 md:mx-[20%] px-4 py-6 [direction:ltr]">
        <h2 data-animation="bounce" class="mb-14 font-iran-sans font-bold text-4xl text-center">چگونه عکاسی آنالوگ را آغاز کنیم؟</h2>
        <div id="react-roadmap" data-roadmap="{{ json_encode($roadmap) }}"></div>
    </section>
    <section class="my-6 w-full md:w-4/5 md:mx-[10%] flex flex-col md:flex-row justify-center gap-8 px-4 py-6 font-iran-sans">
        <section class="flex flex-col-reverse justify-center gap-1">
            <div class="flex items-center justify-center md:justify-start gap-3 px-4">
                <div class="h-20 w-24 flex items-center">@php icon('066-photo camera') @endphp</div>
            </div>
            <div>
                <h2 class="text-2xl font-bold w-full text-center underlined-heading">کالاهای موجود در فروشگاه</h2>
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            <div class="bg-white shadow-md overflow-hidden rounded-lg">
                <div class="w-full h-full flex flex-col">
                    <img class="w-full h-auto" src="/images/1.jpg" alt="">
                    <div class="bg-slate-50 py-4 px-3 rounded-tl-3xl -mt-6 z-10 relative grow">
                        <span class="top-right-quarter-circle"></span>
                        <div class="flex flex-wrap justify-start items-center gap-4">
                            <a href="#/shops/ahmadi" class="h-10 w-10 rounded-full bg-rose-300 font-serif grid place-content-center font-bold">ف ا</a>
                            <a href="#camera">دوربین یاشیکا MF2</a>
                        </div>
                        <p class="text-gray-700 text-sm pt-3 px-3">فنی سالم هست و یکم خش و زنگ زدگی روی بخش های فلزی داره</p>
                        <div class="mt-4 px-2 flex justify-between items-center">
                            <span class="text-sm font-bold">{{ price_format(1750000) }}</span>
                            <button class="h-12">@php icon('cart') @endphp</button>
                        </div>
                        <div class="mt-4">
                            <hr class="my-3">
                            <div class="h-12 w-full flex justify-between text-center text-sm px-4">
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">دسته بندی</span>
                                    <span>کامپکت</span>
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">ارسال رایگان</span>
                                    <img class="w-5 h-5" src="/images/icons/yes.svg" alt="">
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">سالم</span>
                                    <img class="w-5 h-5" src="/images/icons/no.svg" alt="">
                                </span>
                            </div>
                            <hr class="my-3">
                            <div class="text-slate-600 grid grid-cols-2 text-xs px-4">
                                <span class="flex items-center">
                                    <span class="h-5 ml-2">@php icon('calendar') @endphp</span>
                                    {{ now()->subDays(2)->diffForHumans() }}
                                </span>
                                <span class="flex items-center">
                                    <span class="h-5 ml-2">@php icon('eye') @endphp</span>
                                    {{ number_format(2415) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-md overflow-hidden rounded-lg">
                <div class="w-full h-full flex flex-col">
                    <img class="w-full h-auto" src="/images/2.jpg" alt="">
                    <div class="bg-slate-50 py-4 px-3 rounded-tl-3xl -mt-6 z-10 relative grow">
                        <span class="top-right-quarter-circle"></span>
                        <div class="flex flex-wrap justify-start items-center gap-4">
                            <a href="#/shops/ahmadi" class="h-10 w-10 rounded-full bg-rose-300 font-serif grid place-content-center font-bold">ف ا</a>
                            <a href="#camera">دوربین یاشیکا MF2</a>
                        </div>
                        <p class="text-gray-700 text-sm pt-3 px-3">فنی سالم هست و یکم خش و زنگ زدگی روی بخش های فلزی داره</p>
                        <div class="mt-4 px-2 flex justify-between items-center">
                            <span class="text-sm font-bold">{{ price_format(2490000) }}</span>
                            <span class="flex flex-col gap-2 items-center justify-center">
                                <button class="h-6">@php icon('check') @endphp</button>
                                <span class="text-xs">در سبد خرید</span>
                            </span>
                        </div>
                        <div class="mt-4">
                            <hr class="my-3">
                            <div class="h-12 w-full flex justify-between text-center text-sm px-4">
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">دسته بندی</span>
                                    <span>کامپکت</span>
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">ارسال رایگان</span>
                                    <img class="w-5 h-5" src="/images/icons/yes.svg" alt="">
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">سالم</span>
                                    <img class="w-5 h-5" src="/images/icons/yes.svg" alt="">
                                </span>
                            </div>
                            <hr class="my-3">
                            <div class="text-slate-600 grid grid-cols-2 text-xs px-4">
                                <span class="flex items-center">
                                    <span class="h-5 ml-2">@php icon('calendar') @endphp</span>
                                    {{ now()->subDays(2)->diffForHumans() }}
                                </span>
                                <span class="flex items-center">
                                    <span class="h-5 ml-2">@php icon('eye') @endphp</span>
                                    {{ number_format(2415) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    {{--  md:w-[101%] md:px-[1%] md:rotate-1 --}}
    {{-- justify-between gap-6 --}}
    {{-- order-2 md:order-1 --}}
    <section class="mb-20 bg-gray-600 mt-20 flex flex-col md:flex-row items-center justify-center h-fit md:h-96">
        <div class="text-white font-iran-sans p-8 leading-loose">
            <h4 class="text-3xl font-bold">آیا فروشنده تجهیزات آنالوگ هستید؟</h4>
            <h5 class="text-2xl my-6">کالا های آنالوگ خود را 38 فریم بفروشید!</h5>
            <p>اگر فروشنده تجهیزات و کالا های آنالوگ هستید یا هر گونه لوازم آنالوگی را در پیج اینستاگرام خود به فروش می‌رسانید؛ در 38فریم با برند و نام تجاری فروشگاه خودتان تجهیزات و لوازم آنالوگ را به آسانی بفروشید! برای دریافت اطلاعات بیشتر و ثبت نام به عنوان فروشنده کلیک کنید.</p>
            <div class="text-center">
                <a class="svg-500-800-white rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="{{ route('pages.contact') }}">
                    ثبت نام به عنوان فروشنده
                    <x-icon-left-arrow size="16"/>
                </a>
            </div>
        </div>
        <div class="h-48 md:h-full relative flex justify-center">
            <img src="{{ asset('images/seller-camera.webp') }}" alt="">
            {{-- <div class="absolute h-full bg-camera-on-table bg-cover bg-right aspect-video overflow-hidden">
                <div class="absolute w-full h-full bg-black/10"></div>
            </div> --}}
        </div>
    </section>
    <section class="my-12 flex flex-col justify-center items-center font-iran-sans">
        <div class="flex items-center">
            <img src="/images/icons/068-shutter.svg" class="h-28 w-auto p-3" alt="">
            <div>
                <h3 class="font-bold my-3 text-3xl"><span class="text-x-yellow">ژورنال</span> 38 فریم</h3>
                <p class="text-gray-700">در "ژورنال ۳۸فریم" می‌توانید نمایه‌های آنالوگ خود را آپلود و نشر کنید. ژورنال ما گوشه‌ای از عکاسی‌های آنالوگ شماست.</p>
            </div>
        </div>
        <div class="w-full mt-10 md:w-3/4" id="react-gallery"></div>
    </section>
    <x-contact-form />
    <section id="react-blog"></section>
</x-layout>

{{--
    
</x-layout>

--}}

{{-- <picture loading="lazy" class="h-auto w-full">
            <source loading="lazy" media="(max-width: 600px)" srcset="/images/Yashika-360x480.webp"/>
            <source loading="lazy" media="(min-width: 601px)" srcset="/images/Yashika-1920X860.webp"/>
            <img loading="lazy" class="w-full h-auto" src="/images/Yashika-360x480.webp" alt="360px">
        </picture> --}}