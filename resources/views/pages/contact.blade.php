<x-layout>
    <x-slot:title>Contact us</x-slot:title>
    <header class="bg-center bg-cover h-3/4 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute top-0 rounded-t-md">
            <div class="bg-x-green/70 shadow-md w-[8.9rem] h-[21rem] left-0 ml-4 top-24 px-2 py-2 -z-10 absolute rounded-b-full before-green flex flex-col gap-2">
                <p class="grow bg-black/10 font-bold shadow-inner rounded-lg text-center leading-relaxed text-black/80 px-2 py-3 text-2xl">
                    در شرایط <span class="italic">آنالوگ</span>
                    تماس بگیرید!
                </p>
                <a href="tel:+989365746828" class="w-32 h-32 px-6 py-7 svg-32 svg-white bg-black/10 shadow-inner rounded-full grow-0">
                    @php icon('phone-call') @endphp
                </a>
            </div>
        </x-nav>
        <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full" src="/images/old-phone.webp" alt="">
    </header>
    <section class="my-12 flex flex-col justify-center items-center font-iran-sans px-4">
        <div class="flex items-center">
            <img class="h-28 w-auto p-3" src="/icons/046-cable.svg" loading="lazy" alt="">
            <div>
                <h3 class="font-bold my-3 text-4xl">
                    با
                    <span class="text-x-yellow">۳۸ فریم</span>
                    در ارتباط باشید!
                </h3>
                <p class="text-gray-700 text-lg">در چه زمینه‌هایی پاسخگو تماس شما هستیم؟</p>
            </div>
        </div>
        <p class="w-full text-lg mt-4 md:w-3/5 lg:w-1/2 text-gray-800 bg-slate-50 shadow-md rounded-lg text-justify leading-loose py-6 px-8">۳۸فریم یک سایت خصوصی یا انحصاری نیست! بلکه همه ما اعضای خانواده عکاسی آنالوگ هستیم و ۳۸فریم با اهداف غیر مادی برای توسعه بستر عکاسی آنالوگ در ایران فراهم شده است. از هر پیشنهاد و ایده تاثیر گذاری در جریان عکاسی آنالوگ با کمک خودتان استقبال می‌کنیم. با ما در ۳۸فریم شریک باشید و جهان عکاسی آنالوگ در ایران را گسترده تر کنید!
            <br>
            <span class="inline-block w-full text-center mt-4">
                <a class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">
                    چگونه می توانم با شما تماس بگیرم ؟
                </a>
            </span>
        </p>
    </section>
    <section class="w-4/5 mx-[10%] grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 py-4 md:py-8">
        <div class="md:col-span-2 font-iran-sans">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-2 h-fit">
                <img class="h-24" src="/icons/014-file.svg" alt="">
                <div class="text-right">
                    <span class="text-gray-700">&rdquo; آیا می توانم در ۳۸ فریم فروشنده شوم؟ &ldquo;</span>
                    <h2 class="text-[3rem] font-bold"><span class="text-[#8279C0]">فروش</span> در ۳۸ فریم</h2>
                </div>
            </div>
            <p class="mt-4 md:mt-2 md:w-2/3 text-gray-700 leading-relaxed text-justify pr-2">در صورتی که می‌خواهید به عنوان فروشنده تجهیزات آنالوگ در 38فریم فعالیت کنید یا مشخصات و آدرس لابراتوار شما به عکاسان آنالوگ ایران معرفی شود؛ تنها کافی است با شماره تلفن 09365746828 تماس بگیرید و همکاری خود را با 38فریم اغاز کنید.</p>
        </div>
        <div class="py-4">
            <div class="bg-slate-50 w-96 max-w-full border border-black/10 shadow-md -rotate-6 flex flex-col items-start justify-center px-2 py-2">
                <img 
                    src="/images/picture-uwu.webp"
                    alt="38Frame Logo"
                    class="h-auto w-full bg-gray-200"
                >
                <span class="block w-full text-lg text-center pt-3 pb-2 text-x-dark-blue font-bold [direction:ltr]">#shootonfilm</span>
            </div>
        </div>
    </section>
    <x-contact-form />
    <section class="w-4/5 mx-[10%] my-4 px-6 font-iran-sans">
        <div class="w-full flex justify-center gap-6 text-gray-800">
            <a class="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center gap-2 px-3 py-2" href="#instagram">
                <img class="h-7 w-7" src="/icons/social/instagram.svg" alt="">
                اینستاگرام
            </a>
            <a class="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center gap-2 px-3 py-2" href="#telegram">
                <img class="h-7 w-7" src="/icons/social/telegram.svg" alt="">
                تلگرام
            </a>
            <a class="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center gap-2 px-3 py-2" href="#whatsapp">
                <img class="h-7 w-7" src="/icons/social/whatsapp.svg" alt="">
                واتس اپ
            </a>
            <a class="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center gap-3 px-3 py-2" href="#linkedin">
                <img class="h-7 w-7" src="/icons/social/linkedin.svg" alt="">
                لینکداین
            </a>
        </div>
    </section>
</x-layout>