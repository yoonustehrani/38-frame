<x-layout>
    <x-slot:title>38Frame website</x-slot:title>
    <x-header />
    <section class="w-4/5 mx-[10%] grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 py-4 md:py-8">
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
        <section class="w-screen md:rotate-1 h-fit bg-[#111] py-3 flex justify-center items-center flex-col gap-1">
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
    </div>
    <section class="w-4/5 mx-[10%] flex flex-col md:flex-row justify-start gap-4 py-8 my-6 font-iran-sans">
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
            <a class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">ما را بیشتر بشناسید
                <x-icon-left-arrow size="16"/>
            </a>
        </p>
    </section>
    <div class="w-full py-4 overflow-x-hidden">
        <section class="bg-x-dark-blue w-screen md:w-[101%] md:-rotate-1 flex justify-center py-6 font-iran-sans">
            <div class="w-4/5 grid grid-cols-1 md:grid-cols-3 place-content-center gap-4">
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
        <h2 class="mb-14 font-iran-sans font-bold text-4xl text-center">چگونه عکاسی آنالوگ را آغاز کنیم؟</h2>
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
    <section class="mb-20 bg-gray-600 mt-20 md:w-[101%] md:px-[1%] grid grid-cols-1 md:grid-cols-2 md:rotate-1 h-fit md:h-96">
        <div class="text-white font-iran-sans p-8 leading-loose order-2 md:order-1">
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
        <div class="p-3 h-48 md:h-auto relative flex justify-center order-1 md:order-2">
            <div class="absolute -top-14 md:-top-16 ml-4 md:ml-12 h-[130%] aspect-square bg-gray-700/50 rounded-full"></div>
            <div class="absolute -top-16 h-[130%] aspect-square rounded-full border-4 border-gray-700 bg-camera-on-table bg-cover bg-right overflow-hidden">
                <div class="absolute w-full h-full bg-black/10"></div>
            </div>
        </div>
    </section>
    <section class="my-12 flex flex-col justify-center items-center font-iran-sans">
        <div class="flex items-center">
            <img src="/icons/068-shutter.svg" class="h-28 w-auto p-3" alt="">
            <div>
                <h3 class="font-bold my-3 text-3xl"><span class="text-x-yellow">ژورنال</span> 38 فریم</h3>
                <p class="text-gray-700">در "ژورنال ۳۸فریم" می‌توانید نمایه‌های آنالوگ خود را آپلود و نشر کنید. ژورنال ما گوشه‌ای از عکاسی‌های آنالوگ شماست.</p>
            </div>
        </div>
        <div class="w-full mt-10 md:w-3/4" id="react-gallery"></div>
    </section>
    <section class="md:h-fit my-20 w-full overflow-hidden bg-yashika-sm bg-contain md:bg-cover md:bg-yashika-lg flex justify-center items-center relative">
        <section class="w-full bg-black/95 text-white font-iran-sans">
            <div class="w-4/5 mx-[10%] h-full flex flex-col py-5 gap-6">
                <div class="col-span-full flex justify-center items-center text-3xl font-bold h-32">
                    <span class="text-x-yellow">تماس&nbsp;</span>با ما
                </div>
                <div class="grow grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex justify-center items-start">
                        <form action="#" class="grid md:grid-cols-2 px-6 gap-4 h-min">
                            <h5 class="col-span-full text-center text-2xl text-x-yellow font-bold">جوابای این فرم به ما میرسه !</h5>
                            <div class="flex flex-col gap-2 py-3">
                                <label class="text-lg text-x-yellow italic" for="fullname">نام و نام خانوادگی</label>
                                <input type="text" id="fullname" class="input">
                            </div>
                            <div class="flex flex-col gap-2 py-3">
                                <label class="text-lg text-x-yellow italic" for="phone_number">شماره تلفن</label>
                                <input type="text" id="phone_number" class="input">
                            </div>
                            <div class="flex flex-col gap-2 py-3">
                                <label class="text-lg text-x-yellow italic" for="email">آدرس ایمیل</label>
                                <input type="text" id="email" class="input">
                            </div>
                            <div class="flex flex-col gap-2 py-3">
                                <label class="text-lg text-x-yellow italic" for="title">موضوع</label>
                                <input type="text" id="title" class="input">
                            </div>
                            <div class="flex flex-col gap-2 py-3 col-span-full">
                                <label class="text-lg text-x-yellow italic" for="description">توضیحات</label>
                                <textarea id="description" class="input h-24 w-11/12"></textarea>
                            </div>
                            <div class="flex justify-center pt-4 col-span-full">
                                <button type="button" class="button w-40 border-x-yellow text-x-yellow hover:bg-x-yellow hover:text-black rounded-md">ارسال</button>
                            </div>
                        </form>
                    </div>
                    <div class="flex justify-start flex-col items-center leading-loose">
                        <h4 class="font-bold text-2xl my-2">با 38فریم در ارتباط باشید!</h4>
                        <p class="text-justify">38فریم یک سایت خصوصی یا انحصاری نیست! بلکه همه ما اعضای خانواده عکاسی آنالوگ هستیم و 38فریم با اهداف غیر مادی برای توسعه بستر عکاسی آنالوگ در ایران فراهم شده است. از هر پیشنهاد و ایده تاثیر گذاری در جریان عکاسی آنالوگ با کمک خودتان استقبال می‌کنیم. با ما در 38فریم شریک باشید و جهان عکاسی آنالوگ در ایران را گسترده تر کنید!</p>
                        <p class="text-center mt-3">
                            پس اگر صاحب یک لابراتوار خونگی یا غیر خونگی هستید
                            <br>
                            یا داخل تاریکخانه‌های سنتی فعالیت می‌کنید
                            <br>
                            یا اگر فروشنده تجهیزات آنالوگ هستید
                            <br>
                            یا عکاسی در دنیای آنالوگ هستید و در کل
                            <br>
                            به هر شکلی ایده و فکری در زمینه آنالوگ دارید؛
                            <br>
                            <span class="font-bold">38 فریم؛ گرین به گرین با شماست.</span>
                        </p>
                        <span class="text-x-yellow text-2xl">---</span>
                        <p class="text-justify hidden md:block">
                            و اگر هم تانک ظهور شما منفجر شده یا به صورت اشتباهی درب دوربین خود را در حالی که فیلم داخلش جمع نشده است باز کردید یا حتی هنگامی که قوطی فیلم عکاسی شما نور خورده است؛ می‌توانید به صورت مستقیم با شماره 09365746828 تماس بگیرید؛ بنابراین این شماره صرفا برای موقعیت های اضطراری است. برای حمایت از ایده‌ها و تسکین دردهای گرینی شما پاسخگو هستیم. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section>
        <div class="my-8 flex justify-center relative before:z-0 before:no-content before:w-full before:absolute before:h-2 before:bg-rope h-80">
            <div class="grid grid-cols-4 w-3/4 gap-8">
                <div class="bg-creamy shadow-md rounded-b-md relative -mt-1 z-10 px-3 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, culpa. Nobis itaque debitis eligendi fugit ducimus libero reprehenderit ut quod nam! Natus officia veniam eaque iste facilis odit exercitationem iusto!</div>
                <div class="bg-creamy shadow-md rounded-b-md relative -mt-1 z-10 px-3 py-2">Suscipit, accusamus deserunt! Labore minus vitae id quam. Nihil illo voluptate similique, possimus dolor eaque. Accusantium non maiores, amet, deleniti veritatis corrupti, aperiam architecto saepe assumenda quibusdam distinctio optio voluptas?</div>
                <div class="bg-creamy shadow-md rounded-b-md relative -mt-1 z-10 px-3 py-2">Vero illo quam earum vitae inventore, tenetur, beatae ex, perspiciatis delectus pariatur asperiores quasi animi ab vel nesciunt sequi! Vitae delectus aliquam asperiores odio dignissimos libero possimus recusandae excepturi fugit?</div>
                <div class="bg-creamy shadow-md rounded-b-md relative -mt-1 z-10 px-3 py-2">Consequuntur facere incidunt debitis, quos excepturi iure veniam in unde enim, modi ex quas repellendus quis libero quia consectetur saepe deserunt eveniet! Officiis sit veritatis accusantium quod tempora maiores nisi.</div>
            </div>
        </div>
    </section>
    <x-footer />
</x-layout>

{{--
    
</x-layout>

--}}

{{-- <picture loading="lazy" class="h-auto w-full">
            <source loading="lazy" media="(max-width: 600px)" srcset="/images/Yashika-360x480.webp"/>
            <source loading="lazy" media="(min-width: 601px)" srcset="/images/Yashika-1920X860.webp"/>
            <img loading="lazy" class="w-full h-auto" src="/images/Yashika-360x480.webp" alt="360px">
        </picture> --}}