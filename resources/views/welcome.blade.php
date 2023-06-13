<x-layout>
    <x-slot:title>38Frame website</x-slot:title>
    <x-header />
    <section class="w-4/5 mx-[10%] grid grid-cols-3 place-items-center gap-4 py-8">
        <div class="col-span-2 font-iran-sans">
            <div class="flex gap-2 h-fit">
                <div class="h-20 w-20">@php icon('077-photo camera') @endphp</div>
                <div>
                    <span class="text-gray-700">&rdquo;خدمات ما چیست ؟&ldquo;</span>
                    <h2 class="text-[3rem] font-bold">خدمات ۳۸ فریم</h2>
                </div>
            </div>
            <p class="w-2/3 text-gray-900 text-justify pr-2">۳۸ فریم به معرفی لابراتوار‌ها و تاریکخانه‌های عکاسی آنالوگ می‌پردازد و امکان خرید و فروش تجهیزات و لوازم عکاسی آنالوگ برای شیفتگان عکاسی آنالوگ را فراهم ساخته است. در «۳۸فریم» مایحتاج آنالوگ مهیا است و همچنین می‌توانید در ژورنال۳۸فریم نمایه های آنالوگ خود را منتشر کنید!</p>
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
    <section class="w-screen rotate-1 h-fit bg-[#111] py-3 flex justify-center items-center flex-col gap-1">
        <div class="px-2 bg-squares h-full md:h-5 w-4 md:w-full bg-repeat-y md:bg-repeat-x"></div>
        <section class="md:w-4/5 md:mx-[10%] grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 font-iran-sans service-list">
            <div class="rounded-md overflow-hidden relative">
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
            <div class="rounded-md overflow-hidden relative">
                <img src="/images/service-darkroom.webp" alt="">
                <div class="absolute w-full text-center bg-x-yellow/90 bottom-0 left-0 flex flex-col items-center justify-center gap-4 h-16 px-4">
                    <span class="text-2xl -mt-3 font-semibold">معرفی تاریکخانه و تعمیرکاران</span>
                    <p class="hidden text-gray-800">ما به معرفی خدمات تعمیرکاران، لابراتوار‌ها و تاریکخانه ها مانند ظهور و اسکن در همه شهرها می‌پردازیم و خدمات آن ها را به لحاظ کیفیت و هزینه مقایسه می‌کنیم.</p>
                </div>
            </div>
            <div class="rounded-md overflow-hidden relative">
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
    <section class="w-4/5 mx-[10%] flex flex-col md:flex-row justify-start gap-4 py-8 my-6 font-iran-sans">
        <div class="flex flex-col-reverse justify-center gap-1">
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
            <a class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">ما را بیشتر بشناسید
                <x-icon-left-arrow size="16"/>
            </a>
        </p>
    </section>
    <section class="bg-x-dark-blue w-screen -rotate-1 flex justify-center py-6 font-iran-sans">
        <div class="w-4/5 grid grid-cols-1 md:grid-cols-3 place-content-center gap-4">
            <div class="h-72 rounded-md bg-blue-100 flex flex-col gap-6 justify-center items-center">
                <div class="flex flex-row-reverse items-center gap-6">
                    <div class="h-32 w-auto">@php icon('computer') @endphp</div>
                    <span class="text-4xl font-bold" data-count-to="200">۰</span>
                </div>
                <span class="text-xl font-bold">فروشنده در سایت ما هستند</span>
            </div>
            <div class="h-72 rounded-md bg-blue-200 flex flex-col gap-6 justify-center items-center">
                <div class="flex flex-row-reverse items-center gap-6">
                    <div class="h-32 w-auto">@php icon('studio') @endphp</div>
                    <span class="text-4xl font-bold pt-4" data-count-to="25">۰</span>
                </div>
                <span class="text-xl font-bold">تاریکخانه در ایران فعال هستند</span>
            </div>
            <div class="h-72 rounded-md bg-blue-300 flex flex-col gap-6 justify-center items-center">
                <div class="flex flex-row-reverse items-center gap-6">
                    <div class="h-32 w-auto">@php icon('photography') @endphp</div>
                    <span class="text-4xl font-bold" data-count-to="1000">۰</span>
                </div>
                <span class="text-xl font-bold">عکاس آنالوگ در 38فریم هستند</span>
            </div>
        </div>
    </section>
    <section class="my-6 w-3/5 mx-[20%] px-4 py-6 [direction:ltr]">
        <h2 class="mb-14 font-iran-sans font-bold text-4xl text-center">چگونه عکاسی آنالوگ را آغاز کنیم؟</h2>
        <div id="react-roadmap" data-roadmap="{{ json_encode($roadmap) }}"></div>
    </section>
    <section class="my-6 w-4/5 mx-[10%] flex flex-col md:flex-row justify-center gap-8 px-4 py-6 font-iran-sans">
        <section class="flex flex-col-reverse justify-center gap-1">
            <div class="flex items-center justify-start gap-3 px-4">
                <div class="h-20 w-24 flex items-center">@php icon('066-photo camera') @endphp</div>
            </div>
            <div>
                <h2 class="text-2xl font-bold w-full text-center underlined-heading">کالاهای موجود در فروشگاه</h2>
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            {{-- 1 --}}
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
                        {{-- <hr class="my-3"> --}}
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
                                    <img class="w-5 h-5" src="/icons/yes.svg" alt="">
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">سالم</span>
                                    <img class="w-5 h-5" src="/icons/no.svg" alt="">
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
            {{-- 2 --}}
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
                        {{-- <hr class="my-3"> --}}
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
                                    <img class="w-5 h-5" src="/icons/yes.svg" alt="">
                                </span>
                                <span class="flex flex-col items-center gap-2">
                                    <span class="text-gray-700">سالم</span>
                                    <img class="w-5 h-5" src="/icons/yes.svg" alt="">
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
    <section class="mb-20 bg-gray-600 mt-20 w-screen grid grid-cols-1 md:grid-cols-2 rotate-1 h-96">
        <div class="text-white font-iran-sans p-8 leading-loose">
            <h4 class="text-3xl font-bold">آیا فروشنده تجهیزات آنالوگ هستید؟</h4>
            <h5 class="text-2xl my-6">کالا های آنالوگ خود را 38 فریم بفروشید!</h5>
            <p>اگر فروشنده تجهیزات و کالا های آنالوگ هستید یا هر گونه لوازم آنالوگی را در پیج اینستاگرام خود به فروش می‌رسانید؛ در 38فریم با برند و نام تجاری فروشگاه خودتان تجهیزات و لوازم آنالوگ را به آسانی بفروشید! برای دریافت اطلاعات بیشتر و ثبت نام به عنوان فروشنده کلیک کنید.</p>
            <div class="text-center">
                <a class="svg-500-800-white rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">
                    ثبت نام به عنوان فروشنده
                    <x-icon-left-arrow size="16"/>
                </a>
            </div>
        </div>
        <div class="p-3 relative flex justify-center">
            <div class="absolute -top-16 ml-12 h-[130%] aspect-square bg-gray-700/50 rounded-full"></div>
            <div class="absolute -top-16 h-[130%] aspect-square rounded-full border-4 border-gray-700 bg-camera-on-table bg-cover bg-right overflow-hidden">
                <div class="absolute w-full h-full bg-black/10"></div>
            </div>
        </div>
    </section>
    <footer class="mt-64 w-full md:h-80 bg-gray-800 flex justify-center relative font-iran-sans">
        <section class="h-full w-11/12 p-4 bg-gray-700 rotate-1 absolute -top-12 left-auto rounded-t-lg shadow-md grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-6">
            <div class="h-full duration-300 bg-gray-600 rounded-md p-4 text-slate-100">
                <p class="text-sm leading-loose text-justify">
                    <span class="text-base font-bold">۳۸ فریم در چند کلمه</span>
                    <br>
                    "۳۸فریم" مرکز بی‌طرف جامعه کوچک عکاسی آنالوگ ایران است که ازدیاد و توسعه عکاسی آنالوگ را در گرو گسترش سالم بازار می‌داند و فعالیت آن انحصار خصوصی ندارد.
                </p>
                <hr class="my-3">
                <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
                    <linearGradient id="my-cool-gradient" x2="1" y2="1">
                        <stop offset="0%" stop-color="var(--blue)" />
                        <stop offset="20%" stop-color="var(--purple)" />
                        <stop offset="40%" stop-color="var(--red)" />
                        <stop offset="80%" stop-color="var(--orange)" />
                        <stop offset="95%" stop-color="var(--yellow)" />
                        {{-- <stop offset="95%" stop-color="var(--yellow_to)" /> --}}
                    </linearGradient>
                </svg>
                <div class="text-center mx-5 mt-4">
                    <span>از ما در محیط اجتماعی بیشتر ببینید:</span>
                    <div class="flex justify-center gap-4 p-2 bg-gray-700 rounded-full mt-4">
                        <a href="#instagram">
                            <svg id="instagram_logo_icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
                                <g>
                                    <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                                    <path  d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                                    <circle  cx="18.406" cy="5.594" r="1.44"/>
                                </g>
                            </svg>
                        </a>
                        <a href="#twitter">
                            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
                                <path id="twitter_logo_icon" d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"/>
                            </svg>              
                        </a>
                        <a href="#telegram">
                            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
                                <g id="telegram_logo_icon">
                                    <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z    M17.562,8.161c-0.18,1.897-0.962,6.502-1.359,8.627c-0.168,0.9-0.5,1.201-0.82,1.23c-0.697,0.064-1.226-0.461-1.901-0.903   c-1.056-0.692-1.653-1.123-2.678-1.799c-1.185-0.781-0.417-1.21,0.258-1.911c0.177-0.184,3.247-2.977,3.307-3.23   c0.007-0.032,0.015-0.15-0.056-0.212s-0.174-0.041-0.248-0.024c-0.106,0.024-1.793,1.139-5.062,3.345   c-0.479,0.329-0.913,0.489-1.302,0.481c-0.428-0.009-1.252-0.242-1.865-0.442c-0.751-0.244-1.349-0.374-1.297-0.788   c0.027-0.216,0.324-0.437,0.892-0.663c3.498-1.524,5.831-2.529,6.998-3.015c3.333-1.386,4.025-1.627,4.477-1.635   C17.472,7.214,17.608,7.681,17.562,8.161z"/>
                                </g>
                            </svg>
                        </a>
                        <a href="#linkedin">
                            <svg height="24" viewBox="0 0 176 176" width="24" xmlns="http://www.w3.org/2000/svg"><g id="linkedin_logo_icon" data-name="Layer 2"><g id="linkedin"><path id="icon" d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"/></g></g></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="h-full text-slate-100 duration-300 bg-gray-600 rounded-md p-4">
                <div class="font-bold">
                    <x-icon-link color="#EDF1F5" size="24"/>
                    <span class="mx-1">لینک های پر استفاده</span>
                </div>
                <ul class="text-sm md:w-4/5 grid grid-cols-2 gap-5 my-6 px-2 icon-5">
                    <li>
                        <a href="#1">
                            @php icon('shopping-cart') @endphp
                            فروشگاه
                        </a>
                    </li>
                    <li>
                        <a href="#1">
                            @php icon('coins') @endphp
                            فروش در ۳۸فریم
                        </a>
                    </li>
                    <li>
                        <a href="#2">
                            @php icon('eye-dropper') @endphp
                            معرفی لابراتوارهای عکاسی 
                        </a>
                    </li>
                    <li>
                        <a href="#3">
                            @php icon('aperture') @endphp
                            ژورنال عکاسی
                        </a>
                    </li>
                    <li>
                        <a href="#4">
                            @php icon('circle-phone') @endphp
                            تماس با ما
                        </a>
                    </li>
                    <li>
                        <a href="#5">
                            @php icon('briefcase') @endphp
                            شرایط و ضوابط
                        </a>
                    </li>
                </ul>
            </div>
            <div class="h-full duration-300 bg-gray-600 rounded-md p-4">
                <p class="text-slate-100 text-sm leading-loose">
                    <span class="font-bold text-base">- تماس با ما</span>
                    <br>
                    ۳۸فریم؛ گرین به گرین با شماست.
                    <br>
                    می‌توانید از طریق شماره تلفن زیر به صورت مستقیم با "۳۸فریم" تماس بگیرید. در صورت عدم پاسخگویی از طریق پیامک با ما در ارتباط باشید.
                </p>
                <div class="flex justify-center icon-8 mt-6 text-lg">
                    <a href="tel:+989365746828" class="border-2 border-dashed hover:border-rose-300 py-2 px-4 rounded-full w-fit" style="direction: ltr; display: block;">
                        @php icon('phone-call') @endphp
                        ۰۹۳۶ ۵۷۴ ۶۸۲۸
                    </a>
                </div>
            </div>
        </section>
    </footer>
</x-layout>