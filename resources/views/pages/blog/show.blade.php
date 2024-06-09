<x-layout :title="$post->seo->html_title ?? $post->title">
    <x-slot:headtag>
        @if ($post->seo?->meta_description)
            <meta name="description" content="{{ $post->seo->meta_desscription }}">
            <meta name="robots" content="index, follow, max-image-preview:standard, max-snippet:-1, max-video-preview:-1">
        @endif
    </x-slot:headtag>
    <header class="h-36 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute z-20 top-0 rounded-md bg-gray-800" />
        {{-- <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full opacity-90" src="/images/blog-bg.webp" alt=""> --}}
    </header>
    <section class="w-full flex flex-col gap-6 items-center font-iran-sans">
        <section class="px-6 md:max-w-md flex flex-col gap-4">
            @if ($post->avatar)
                <img width="400" class="w-auto h-80 rounded-md" data-src="{{ asset($post->avatar->path) }}" src="{{ asset($post->avatar->thumbnail_path) }}" alt="{{ $post->avatar->alt }}">
            @endif
            <h1 class="text-gray-900 font-bold text-4xl leading-relaxed">{{ $post->title }}</h1>
            <h2 class="text-gray-600 text-xl">{{ $post->subtitle }}</h2>
            <div class="flex gap-4 items-center">
                <img class="rounded-full" height="80px" width="80px" src="{{ asset($post->author->avatar) }}" alt="{{ $post->author->username }}">
                <div class="flex flex-col gap-3 text-sm">
                    <span class="text-gray-700 font-bold">{{ $post->author->username }}</span>
                    <span class="text-gray-500 flex items-center gap-2">
                        {{-- <span>11 دقیقه زمان مطالعه</span> --}}
                        {{-- <span class="w-1 h-1 rounded-full bg-gray-500 inline-block"></span> --}}
                        <span>{{ $post->created_at->diffForHumans() }}</span>
                    </span>
                </div>
            </div>
            <div class="border-y border-gray-200 py-3 flex flex-row-reverse justify-center items-center gap-2">
                <button type="button" class="hover:bg-rose-100 duration-300 flex items-center justify-center h-10 w-10 rounded-md hover:text-rose-500 text-gray-700">
                    <svg height="30" viewBox="0 0 512 512" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="m256 436a54.62 54.62 0 0 1 -29.53-8.64c-25-16.07-73.08-49.05-113.75-89.32-49.91-49.46-75.22-96.04-75.22-138.48 0-29.49 8.72-56.51 25.22-78.13a115.2 115.2 0 0 1 137.89-35.75c21.18 9.14 40.07 24.55 55.39 45 15.32-20.5 34.21-35.91 55.39-45a115.2 115.2 0 0 1 137.89 35.75c16.5 21.62 25.22 48.64 25.22 78.13 0 42.44-25.31 89-75.22 138.44-40.67 40.27-88.73 73.25-113.75 89.32a54.62 54.62 0 0 1 -29.53 8.68zm-101.84-334.94a89.41 89.41 0 0 0 -23.42 3.1 90.93 90.93 0 0 0 -48.15 32.44c-13.14 17.22-20.09 39-20.09 63 0 35.52 22.81 76.12 67.81 120.68 39 38.66 85.47 70.5 109.67 86a29.72 29.72 0 0 0 32 0c24.2-15.54 70.63-47.38 109.67-86 45-44.56 67.81-85.16 67.81-120.68 0-24-6.95-45.74-20.09-63a90.93 90.93 0 0 0 -48.15-32.44c-34.17-9.28-82.18.42-114.48 55.48a12.49 12.49 0 0 1 -21.56 0c-25.38-43.34-60.54-58.58-91.02-58.58z"/>
                    </svg>
                    {{-- <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                        <path d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z" fill="#f9595f"/>
                    </svg> --}}
                </button>
                <button type="button" class="hover:bg-rose-100 duration-300 flex items-center justify-center h-10 w-10 rounded-md hover:text-rose-500 text-gray-700">
                    <svg height="25" width="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g class="fill-current duration-300">
                            <path d="m9.98999 22.78c-.6 0-1.17-.3-1.56-.83l-1.19998-1.6c0 .01-.05001-.02-.07001-.02h-.36999c-3.42 0-5.54001-.93-5.54001-5.54v-4c0-4.20999 2.57001-5.30999 4.73001-5.49999.24-.03.52-.04001.81-.04001h6.39999c3.62 0 5.54 1.92001 5.54 5.54v4c0 .29-.01.57-.05.84-.18 2.13-1.28 4.7-5.49 4.7h-.4l-1.24 1.62c-.39.53-.96.83-1.56001.83zm-3.19998-16.03c-.23 0-.45001.01-.66001.03-2.32.2-3.38 1.47001-3.38 4.01v4c0 3.43 1.06001 4.04 4.04001 4.04h.39999c.45 0 .95999.25 1.23999.61l1.20001 1.61c.22001.3.5.3.72 0l1.2-1.6c.29-.39.75-.62 1.24-.62h.4c2.54 0 3.81-1.07 4-3.35.03-.24.04-.46.04-.69v-4c0-2.78999-1.25-4.04-4.04-4.04z"/>
                            <path d="m9.99023 14.19c-.56 0-1-.45-1-1s.45-1 1-1c.54997 0 .99997.45.99997 1s-.44 1-.99997 1z"/>
                            <path d="m13.1899 14.19c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                            <path d="m6.7998 14.19c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                            <path d="m17.9401 16.29c-.2 0-.4-.08-.54-.23-.16-.16-.23-.39-.2-.61.03-.21.04-.43.04-.66v-4c0-2.78999-1.25-4.04-4.04-4.04h-6.39998c-.23 0-.44997.01-.65997.03-.22.03-.45002-.05001-.61002-.20001-.16-.16-.25001-.37998-.23001-.59998.18-2.16 1.29-4.73001 5.49998-4.73001h6.4c3.62 0 5.54 1.92001 5.54 5.54001v3.99999c0 4.21-2.57 5.31-4.73 5.5-.03 0-.05 0-.07 0zm-11.01995-11.04h6.26985c3.62 0 5.54 1.92001 5.54 5.54l.0001 3.87c1.7-.42 2.5-1.67 2.5-3.87v-3.99999c0-2.79-1.25-4.04001-4.04-4.04001h-6.4c-2.19996 0-3.43995.8-3.86995 2.5z"/>
                        </g>
                    </svg>
                </button>
                <button type="button" class="hover:bg-rose-100 duration-300 flex items-center justify-center h-10 w-10 rounded-md hover:text-rose-500 text-gray-700">
                    <svg class="fill-current" height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 277.279 277.279" style="enable-background:new 0 0 277.279 277.279;" xml:space="preserve">
                        <g>
                            <path d="M149.245,191.671l-42.425,42.426c0,0,0,0.001-0.001,0.001c0,0,0,0.001-0.001,0.001
                                c-17.544,17.545-46.092,17.546-63.638,0c-8.5-8.5-13.18-19.801-13.18-31.82c0-12.018,4.68-23.317,13.177-31.817
                                c0.001-0.001,0.002-0.002,0.003-0.003l42.425-42.426c5.857-5.858,5.857-15.356-0.001-21.213c-5.857-5.857-15.355-5.857-21.213,0
                                l-42.425,42.426c-0.003,0.003-0.006,0.007-0.009,0.01C7.798,163.42,0,182.251,0,202.279c0,20.033,7.801,38.867,21.967,53.033
                                C36.589,269.933,55.794,277.244,75,277.244c19.206,0,38.412-7.311,53.032-21.932c0,0,0-0.001,0-0.001
                                c0.001,0,0.001-0.001,0.001-0.001l42.425-42.426c5.857-5.857,5.857-15.355-0.001-21.213
                                C164.601,185.814,155.104,185.814,149.245,191.671z"/>
                            <path d="M277.279,75c0-20.033-7.802-38.867-21.968-53.033c-29.243-29.242-76.824-29.241-106.065,0
                                c-0.001,0.002-0.003,0.003-0.004,0.005l-42.424,42.423c-5.858,5.857-5.858,15.356,0,21.213c2.93,2.93,6.768,4.394,10.607,4.394
                                c3.838,0,7.678-1.465,10.606-4.394l42.424-42.423c0.001-0.002,0.003-0.003,0.005-0.005c17.544-17.544,46.092-17.545,63.638,0
                                c8.499,8.5,13.181,19.801,13.181,31.82c0,12.018-4.68,23.317-13.178,31.817c-0.001,0.001-0.002,0.002-0.003,0.003l-42.425,42.426
                                c-5.857,5.857-5.857,15.355,0.001,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l42.425-42.426
                                c0.003-0.003,0.006-0.007,0.009-0.01C269.48,113.859,277.279,95.028,277.279,75z"/>
                            <path d="M85.607,191.671c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l84.852-84.852
                                c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0l-84.852,84.851
                                C79.749,176.316,79.749,185.814,85.607,191.671z"/>
                        </g>
                    </svg>
                </button>
                {{-- Like button --}}
                {{-- Comment button --}}
                {{-- Copy link button --}}
            </div>
        </section>
        <section class="w-11/12 lg:w-4/5 text-gray-700 leading-loose">
            {!! $post->body !!}
        </section>
    </section>
</x-layout>