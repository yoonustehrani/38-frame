<x-layout>
    <x-slot:title>وبلاگ ۳۸ فریم</x-slot:title>
    <header class="bg-center bg-cover h-3/4 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute z-20 top-0 rounded-t-md bg-x-dark-blue/90" />
        <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full opacity-90" src="/images/blog-bg.webp" alt="">
    </header>
    <section class="w-full float-left md:w-4/5 md:mx-[10%] flex flex-col md:flex-row gap-8 my-6 font-iran-sans">
        <section class="sticky z-10 md:px-4">
            <div class="flex justify-center md:justify-start items-center px-6">
                <img class="h-32 w-auto p-3" src="/icons/011-documents.svg" loading="lazy" alt="">
                <div>
                    <h3 class="font-bold my-3 text-gray-800 text-4xl">
                        وبلاگ
                        <span class="text-x-dark-blue">۳۸ فریم</span>
                    </h3>
                    <p class="text-gray-700 text-lg">بروزترین مجموعه مقالات آنالوگ ایران</p>
                </div>
            </div>
            <p class="px-6 text-gray-800">
                در بلاگ 38فریم به بررسی اخبار جهان آنالوگ، آموزشات ابتدایی منطبق بر کتاب‌های عکاسی آنالوگ، تاریخچه عکاسی آنالوگ و معرفی و تحلیل دوربین های آنالوگ و فیلم‌ های عکاسی آنالوگ می‌پردازیم. باشد که علاقه‌مندان آگاه تر شوند.
            </p>
        </section>
        <div class="px-4 py-6">
            <h3 class="text-gray-800 font-bold text-xl mb-6">دسته بندی مقالات عکاسی آنالوگ</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 w-max">
                <li>
                    <a href="#1" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/icons/048-bag.svg" alt="">
                        <span>مقاله خبری از اخبار آنالوگ</span>
                    </a>
                </li>
                <li>
                    <a href="#2" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/icons/096-folder.svg" alt="">
                        <span>مقاله آموزشی عکاسی</span>
                    </a>
                </li>
                <li>
                    <a href="#3" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/icons/001-folder.svg" alt="">
                        <span>مقاله معرفی و تحلیل فیلم یا دوربین</span>
                    </a>
                </li>
                <li>
                    <a href="#4" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/icons/035-chair.svg" alt="">
                        <span>مقاله متفرقه ( تاریخچه، دانستنی و...)</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section class="w-4/5 mx-[10%] float-left bg-creamy shadow-md my-6 py-3 px-4 rounded-md">
        <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" viewBox="0 0 48 48" width="96px" height="96px">
                <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"/>
                <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"/>
                <path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"/>
                <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"/>
                <path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"/>
            </svg>
        </button>
        <input class="font-iran-sans bg-transparent text-gray-700 h-24 text-2xl w-3/4 px-4 outline-none" type="text" name="" id="" placeholder="جستجو در مقالات 38 فریم ...">
    </section>
    <section class="w-4/5 mx-[10%] float-left mt-6 mb-12 md:px-6 py-4">
        <div class="w-full grid grid-cols-4 gap-6 font-iran-sans">
            @foreach (App\Models\Post::factory()->count(12)->make() as $post)
                @php
                    $post->author = App\Models\User::factory()->make();
                @endphp
                <x-blog-card :post="$post"/>
            @endforeach
        </div>
    </section>
</x-layout>     