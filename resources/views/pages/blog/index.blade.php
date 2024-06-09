<x-layout title="وبلاگ ۳۸ فریم">
    <header class="bg-center bg-cover h-3/4 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute z-20 top-0 rounded-t-md bg-x-dark-blue/90" />
        <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full opacity-90" src="/images/blog-bg.webp" alt="">
    </header>
    <section class="w-full float-left md:w-4/5 md:mx-[10%] flex flex-col md:flex-row gap-8 my-6 font-iran-sans">
        <section class="sticky z-10 md:px-4">
            <div class="flex justify-center md:justify-start items-center px-6">
                <img class="h-32 w-auto p-3" src="/images/icons/011-documents.svg" loading="lazy" alt="">
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
                        <img class="h-9 pl-2 w-auto inline-block" src="/images/icons/048-bag.svg" alt="">
                        <span>مقاله خبری از اخبار آنالوگ</span>
                    </a>
                </li>
                <li>
                    <a href="#2" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/images/icons/096-folder.svg" alt="">
                        <span>مقاله آموزشی عکاسی</span>
                    </a>
                </li>
                <li>
                    <a href="#3" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/images/icons/001-folder.svg" alt="">
                        <span>مقاله معرفی و تحلیل فیلم یا دوربین</span>
                    </a>
                </li>
                <li>
                    <a href="#4" class="bg-x-grey duration-500 hover:bg-gray-600 hover:text-white py-3 px-4 rounded-l-full h-auto">
                        <img class="h-9 pl-2 w-auto inline-block" src="/images/icons/035-chair.svg" alt="">
                        <span>مقاله متفرقه ( تاریخچه، دانستنی و...)</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <livewire:posts />
    <x-slot:headTag>
        @livewireStyles
    </x-slot:headTag>
    <x-slot:scriptTags>
        @livewireScripts
    </x-slot:scriptTags>
</x-layout>