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
    {{-- <section class="w-4/5 mx-[10%] flex justify-start gap-4 py-8 my-6 font-iran-sans">
        <div class="flex flex-col-reverse justify-center gap-1">
            <div class="flex items-center justify-start gap-3 px-4">
                <div class="h-20 w-24 flex items-center">@php icon('066-photo camera') @endphp</div>
                <span class="text-gray-700">&rdquo;ما چه کار می‌کنیم؟&ldquo;</span>
            </div>
            <div>
                <h2 class="text-[3rem] font-bold w-full underlined-heading">درباره ۳۸ فریم</h2>
            </div>
        </div>
        <p class="w-2/3 text-gray-900 flex flex-col justify-center text-justify pr-2">
            <span class="font-bold text-xl">آنالوگ، زنده است! </span>
            «عکاسی آنالوگ زنده است و نبض دارد.» این باور ما در 38فریم است. ما خوره و نِردهای آنالوگ هستیم. ما از گرین ساخته شدیم و داخل سایت 38فریم به هر چیزی در خصوص عکاسی آنالوگ می‌پردازیم. 38فریم حامی جریان عکاسی آنالوگ در ایران است. از معرفی لابراتوار ها و ایجاد یک بازار برای خرید و فروش آسون تجهیزات آنالوگ تا هر چیزی برای حمایت از آنالوگ.
            <a class="svg-500-800 rounded-md w-fit inline-flex items-center gap-2 mt-3 px-4 py-2 border-2 border-dashed" href="#">ما را بیشتر بشناسید
                <x-icon-left-arrow size="16"/>
            </a>
        </p>
    </section>
    <section class="bg-x-dark-blue w-screen -rotate-1 mb-64 flex justify-center py-6 font-iran-sans">
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
    <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut commodi corporis obcaecati. Minima odio consequuntur repellendus ex perspiciatis! Quasi optio saepe corporis mollitia similique doloribus facere vero nihil, exercitationem amet.
        Dolorum hic id nemo. Harum facere, sint tempora cumque minima laborum ad iusto obcaecati, maiores cupiditate eius rem doloremque eum ea eos eveniet repudiandae. Cumque culpa maxime nostrum nihil explicabo.
        Laborum iusto corporis vel, accusamus reiciendis illo earum maiores odit amet optio dolore perferendis ea esse, vitae suscipit doloremque aperiam vero fuga cum consequatur voluptates. Molestiae reprehenderit dolorum ea alias?
        Deleniti doloribus laborum saepe aliquid, dolorum molestias obcaecati quos deserunt mollitia, quaerat porro beatae voluptates optio excepturi unde, quas veritatis quisquam ab repudiandae fugit rem autem possimus eaque! Iste, illo.
        Beatae, dolorem? Sunt facilis odit eveniet optio vitae, architecto et tempore veniam! Illo aliquam possimus soluta tempore, itaque, accusamus nostrum consequuntur explicabo unde ratione placeat culpa adipisci et velit deleniti.
        Error vitae obcaecati voluptas dolore ipsa sapiente, odio, vero quas velit inventore sunt animi nisi perferendis exercitationem commodi nesciunt, eius consequatur ratione. Laboriosam accusantium rem consequatur ipsa animi deleniti similique.
        Repellat ad itaque optio quasi ratione fugiat omnis quam unde magnam. Quis dignissimos minus eligendi inventore aperiam ut rerum in amet tempore ipsum, impedit accusantium pariatur ipsam est molestiae aliquam.
        Facilis illum rem voluptatem nulla autem aliquid. Voluptas beatae voluptatum excepturi exercitationem quas, enim debitis itaque. Temporibus quos optio ad aperiam, illo corporis repudiandae, laudantium fuga autem velit dolorum! Nisi.
        Vitae dignissimos rerum esse qui repellat, accusamus non necessitatibus autem sequi nesciunt fugit odit perspiciatis impedit ad soluta repellendus possimus nemo, quis deserunt. Quidem tenetur ullam praesentium, ex assumenda fuga.
        Architecto exercitationem voluptates fugit hic sed cum necessitatibus doloribus natus culpa sapiente officiis, omnis expedita illum corrupti itaque suscipit aperiam! Saepe exercitationem libero facere aspernatur, nobis quis quasi consectetur? Quisquam.
    </section> --}}
</x-layout>