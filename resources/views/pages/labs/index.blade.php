<x-layout title="تاریکخانه ها و تعمیرکاران">
    <header class="bg-center bg-cover h-auto md:h-3/4 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute top-0 rounded-md bg-x-dark-blue/90" />
        {{-- /images/bg-blurry.webp --}}
        <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full" src="/images/bg-printed-photos.webp" alt="">
    </header>
    <section class="my-12 flex flex-col justify-center items-center font-iran-sans px-4">
        <div class="flex items-center">
            <img class="h-28 w-auto p-3" src="/images/icons/040-photography.png" loading="lazy" alt="">
            <div>
                <h1 class="font-bold my-3 text-4xl">
                    تاریکخانه های آنالوگ
                    <span class="text-x-yellow">۳۸ فریم</span>
                </h1>
                <p class="text-gray-700 text-lg">معرفی تاریکخانه‌های آنالوگ و تعمیرکاران دوربین عکاسی</p>
            </div>
        </div>
        <p class="w-full text-lg mt-4 md:w-3/5 lg:w-1/2 text-gray-800 bg-slate-50 shadow-md rounded-lg text-justify leading-loose py-6 px-8">
            38فریم به عنوان مرجع و حامی جریان عکاسی آنالوگ ایران به معرفی تمامی تاریکخانه‌ها و لابراتوارهای عکاسی آنالوگ به صورت تماما رایگان می‌پردازد تا شما نزدیک ترین و باکیفیت ترین تاریکخانه یا لابرتوار عکاسی آنالوگ مورد نظرتان را با بررسی خدمات و قیمت آن پیدا کرده و آن ها را مقایسه کنید!
            <br>
            <span class="inline-block w-full text-center mt-4">
                <a href="#lab-list" class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">
                    جستجوی لابراتوار‌ها و تاریکخانه‌ها
                </a>
            </span>
        </p>
    </section>
    <section class="font-iran-sans w-4/5 mx-[10%] flex flex-col justify-center items-center">
        <div class="flex flex-col-reverse text-center md:text-right justify-center gap-1">
            <div class="flex items-center justify-start gap-3 px-4">
                <div class="h-20 w-auto flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="60" height="60"><path d="M14.086,19.414c.392,.392,.905,.586,1.418,.586,.509,0,1.017-.191,1.399-.575l2.793-2.707c.396-.384,.406-1.018,.021-1.414-.386-.396-1.018-.406-1.414-.021l-2.814,2.707-1.674-1.623c2.359-1.509,3.966-3.933,4.162-6.715,.185-2.613-.768-5.17-2.613-7.015C13.519,.791,10.959-.165,8.349,.023,3.823,.343,0,4.589,0,9.296v5.038c0,2.021,1.643,3.666,3.661,3.666h4.477c1.336,0,2.614-.244,3.782-.685l2.166,2.099Zm-10.425-3.414c-.916,0-1.661-.747-1.661-1.666v-5.038c0-3.696,2.972-7.029,6.489-7.278,.167-.012,.333-.018,.498-.018,1.859,0,3.645,.732,4.962,2.051,1.436,1.435,2.176,3.425,2.033,5.46-.253,3.578-3.772,6.489-7.845,6.489H3.661ZM11.953,6.466c.224,1.271-.381,2.542-1.506,3.163-.447,.246-.447,.318-.447,.371,0,.553-.447,1-1,1s-1-.447-1-1c0-1.308,1.038-1.879,1.481-2.123,.289-.16,.595-.535,.502-1.065-.069-.393-.402-.726-.793-.794-.31-.058-.603,.021-.832,.216-.228,.19-.358,.47-.358,.767,0,.553-.447,1-1,1s-1-.447-1-1c0-.889,.391-1.727,1.072-2.299,.681-.572,1.578-.814,2.464-.653,1.21,.211,2.205,1.206,2.417,2.418Zm-1.703,6.784c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25,.56-1.25,1.25-1.25,1.25,.56,1.25,1.25Zm13.75,2.75v5c0,1.657-1.343,3-3,3h-5c-2.955,0-5.535-1.615-6.92-4.004,.769-.006,1.518-.091,2.242-.248,1.101,1.371,2.787,2.252,4.678,2.252h5c.552,0,1-.448,1-1v-5c0-1.891-.881-3.577-2.252-4.678,.156-.724,.242-1.473,.248-2.242,2.389,1.385,4.004,3.965,4.004,6.92Z"/></svg>
                </div>
                <span class="text-gray-700">&rdquo;سوالات متداول&ldquo;</span>
            </div>
            <div>
                <h2 class="text-[3rem] font-bold w-full underlined-heading text-center">FAQ</h2>
            </div>
        </div>
        <section data-accordion class="py-6 mt-6 w-full md:2/3 xl:w-3/5 grid grid-cols-1 gap-8 grid-flow-row">
            <div class="border-b border-black/10 pb-6">
                <div class="flex justify-between gap-4 md:gap-12 items-center font-bold text-2xl hover:text-x-green duration-300 cursor-pointer">
                    <h3>خدمات تاریکخانه‌های آنالوگ یا لابراتوار‌های عکاسی آنالوگ چیست؟</h3>
                    <span>+</span>
                </div>
                <p class="py-5 px-3 text-lg w-full hidden">همانطور که بسیاری از شما عکاسان آنالوگ و علاقه‌مندانِ آنالوگ می‌دانید؛ فیلم‌های عکاسی پس از ثبت عکس و استفاده در دوربین‌های آنالوگ نیاز به فرایندی به نام فرایند ظهور دارند که با عنوان تخصصی “photographic development” یا به اختصار “development” شناخته می‌شود. بسیاری از عکاسان آنالوگ فرایند ظهور خود را به تاریکخانه‌های عکاسی یا لابراتوار‌های عکاسی آنالوگ می‌سپارند تا فیلم عکاسی شده ایشان را نخست در فرایند ظهور، ظاهر کند و سپس در صورت تمایل عکاس نگاتیوهای فیلم عکاسی ظاهر شده را اسکن یا چاپ نماید. بنابراین در تاریکخانه‌ آنالوگ یا لابراتوار آنالوگ، خدماتی نظیر انواع شیوه‌های ظهور و اسکن فیلم عکاسی آنالوگ موجود و فراهم است. تاریکخانه‌های عکاسی آنالوگ، داروهای مختلف و تکنولوژی‌های متفاوتی را برای ظهور و اسکن فیلم‌های عکاسی آنالوگ در نظر می‌گیرند که تا فیلم‌های شما در بهترین شرایط ممکن ظاهر و اسکن و چاپ شوند. </p>
            </div>
            <div class="border-b border-black/10 pb-6">
                <div class="flex justify-between gap-4 md:gap-12 items-center font-bold text-2xl hover:text-x-green duration-300 cursor-pointer">
                    <h3>تاریکخانه‌ها و لابراتوار‌های آنالوگ در چه شهر‌هایی هستند؟</h3>
                    <span>+</span>
                </div>
                <p class="py-5 px-3 text-lg hidden">تا به امروز تعداد قابل توجهی لابراتوار عکاسی آنالوگ در شهر‌های مشهد، تهران، اصفهان، ساری، کرج و... فعال هستند و در حال ارائه خدمات ظهور فیلم عکاسی آنالوگ و اسکن نگاتیو‌های آنالوگ می‌باشند. این لابراتوار‌های عکاسی عموما در اینستاگرام دارای صفحه رسمی نیز هستند و از آن طریق اقدام به دریافت سفارشات شما عکاسان می‌کنند؛ با این حال تعداد بی‌شماری تاریکخانه عکاسی سنتی در سراسر شهر‌های ایرانی وجود دارند که خدمات ظهور و اسکن خود را به صورت حضوری به عکاسان ارائه می‌دهند. بنابراین تعداد بسیاری لابراتوارهای آنالوگ اینستاگرامی، تاریکخانه‌های عکاسی سنتی و همچنین افراد حقیقی خودجوش با استودیو‌های خانگی وجود دارند که اقدام به ارائه خدمات ظهور و اسکن در سطح کشور می‌کنند. </p>
            </div>
            <div class="border-b border-black/10 pb-6">
                <div class="flex justify-between gap-4 md:gap-12 items-center font-bold text-2xl hover:text-x-green duration-300 cursor-pointer">
                    <h3>خدمات تعمیرکاران آنالوگ چیست؟</h3>
                    <span>+</span>
                </div>
                <p class="py-5 px-3 text-lg hidden">عموما تعمیرکاران دوربین‌های آنالوگ پیرمرد‌های تعمیرکار دوربین‌های عکاسی هستند! با این حال کسانی نیز یافت می‌شوند که سررشته ای از تعمیر تخصصی دوربین‌های عکاسی آنالوگ داشته باشند. تست و سرویس منظم دوربین‌های عکاسی از خدمات تعمیرکاران محترم م چیره دست است. تعمیر یا تعویض قطعات نیز از خدماتی است که بسیاری از تعمیرکاران آنالوگ آن را برطرف می‌کنند. اما توجه داشته باشید که هر تعمیرکاری تایید شده نیست!</p>
            </div>
            <div class="border-b border-black/10 pb-6">
                <div class="flex justify-between gap-4 md:gap-12 items-center font-bold text-2xl hover:text-x-green duration-300 cursor-pointer">
                    <h3>تفاوت لابراتوار و تاریکخانه چیست؟</h3>
                    <span>+</span>
                </div>
                <p class="py-5 px-3 text-lg hidden">به صورت تخصصی گفته می‌شود که لابراتوار عکاسی آنالوگ یا استودیو آنالوگ به چاپ و اسکن و خدمات جانبی آنالوگ نظیر تعمیر و خرید و فروش کالا نیز می‌پردازد اما تاریکخانه بخشی از یک لابراتوار است و صرفا به ظهور فیلم‌ها و در نهایت اسکن نگاتیو‌ها رسیدگی می‌کند. با این حال 38فریم در اصطلاحات فرهنگ آنالوگ خود، به استودیو‌های سنتی و بومی در شهر‌های مختلف که قدیمی هستند تاریکخانه می‌گوید و لابراتوار نیز استودیوهای مدرن اینستاگرامی هستند.</p>
            </div>
        </section>
    </section>
    <section class="my-12 flex flex-col justify-center items-center font-iran-sans px-4" id="lab-list">
        <div class="flex flex-col md:flex-row items-center">
            <img class="h-28 w-auto p-3" src="/images/icons/040-photography.png" loading="lazy" alt="">
            <div>
                <h2 class="font-bold my-3 text-4xl">
                    تاریکخانه های
                    <span class="text-x-dark-blue">ایران</span>
                </h2>
                <p class="text-gray-700 text-lg">لیست تاریکخانه ها و لابراتوار های آنالوگ</p>
            </div>
        </div>
        <section id="react-labs" class="w-11/12 flex flex-col md:gap-6 md:flex-row items-start overflow-x-auto overflow-y-hidden mt-8"></section>
    </section>
</x-layout>