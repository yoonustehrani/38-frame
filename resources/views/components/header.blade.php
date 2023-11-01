<header class="bg-center bg-contain w-full h-2/3 min-h-[580px] sm:h-3/4 flex flex-col justify-between items-center font-iran-sans bg-green-pattern">
    <x-nav classNames="rounded-md bg-x-green/80"/>
    <div class="grow h-36 w-full">
        <div class="w-full h-full flex flex-col-reverse items-center justify-between pt-32 sm:pt-0 sm:grid sm:grid-cols-10">
            <div class="sm:col-span-3 relative w-full h-72 sm:w-auto sm:h-full">
                <picture data-animation="fadeInRight" class="inline-block opacity-0 absolute right-0 bottom-0 h-full pt-0 sm:pt-32" src="/images/cameraman-1200h.webp">
                    <source media="(min-width: 769px)" srcset="{{ asset('images/cameraman-1200h.webp') }}"/>
                    <img src="{{ asset('images/cameraman-360w.webp') }}" class="h-full"/>
                </picture>
            </div>
            <div class="sm:col-span-7 flex flex-col justify-center leading-loose px-3 sm:px-0">
                <h1 data-animation="zoomInDown" class="opacity-0 text-2xl sm:text-4xl font-bold text-black rounded-t-lg bg-x-green/40 w-fit p-3 mb-1 low-layer">۳۸فریم | نخستین جامعه عکاسی آنالوگ ایران</h1>
                <p data-animation="zoomInUp" class="opacity-0 text-xl sm:text-2xl text-gray-950 rounded-b-lg bg-x-green/40 w-fit p-3 low-layer">خانواده عکاسی آنالوگ «۳۸فریم» اولین مرجع عکاسی آنالوگ در ایران</p>
                {{-- <div class="py-3 flex justify-start gap-3">
                    <a class="rounded-full bg-gray-900/90 hover:bg-gray-800 text-white flex items-center justify-between h-9" href="#2">
                        <span class="bg-gray-800 rounded-full w-9 h-full flex justify-center items-center">@php icon('cash-on-delivery') @endphp</span>
                        <span class="pl-3 pr-1">خرید لوازم آنالوگ</span>
                    </a>
                    <a class="rounded-full bg-gray-900/90 hover:bg-gray-900 duration-300 text-white flex items-center justify-between h-10" href="#2">
                        <span class="bg-gray-900 p-2 rounded-full w-10 h-full flex justify-center items-center">@php icon('money') @endphp</span>
                        <span class="pl-3 pr-1 text-slate-200">فروش لوازم آنالوگ</span>
                    </a>
                    <a class="px-2 py-1" href="#222">معرفی لابراتوار ها</a>
                </div> --}}
            </div>
        </div>
    </div> 
</header>