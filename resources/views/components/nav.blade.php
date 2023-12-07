<nav id="navbar" data-animation="backInDown" class="opacity-0 grow-0 absolute z-50 flex items-center gap-4 px-4 justify-between h-20 shadow-md w-[90%] mt-4 {{ $classNames ?? 'bg-x-green/80' }}">
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
        <ul class="hidden lg:flex flex-col lg:flex-row h-full lg:relative lg:w-fit lg:h-full justify-center lg:justify-start items-center content-center gap-8 {{ $textColor ?? 'text-slate-50' }} font-semibold text-lg">
            @if (get_menu('main'))
                @foreach (get_menu('main')->items as $item)
                    <li>
                        <a href="{{ $item->url }}">{{ $item->title }}</a>
                    </li>
                @endforeach
            @endif
        </ul>
    </div>
    <div class="flex items-center gap-2">
        <a class="pl-3 pr-1 py-1 gap-1 shadow-md rounded-md bg-slate-50 h-fit flex justify-center items-center text-sm" href="{{ route('userarea') }}">
            <img height="28" width="28" src="{{ asset('/images/icons/009-lock.svg') }}" alt="">
            <span>ورود / ثبت نام</span>
        </a>
    </div>
    {{ $slot }}
</nav>