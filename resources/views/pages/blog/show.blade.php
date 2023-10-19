<x-layout :title="$post->title">
    <header class="h-36 overflow-hidden w-full flex md:flex-col justify-center items-center font-iran-sans relative">
        <x-nav classNames="absolute z-20 top-0 rounded-t-md bg-gray-600" />
        {{-- <img class="h-full w-auto md:min-w-fit md:h-auto md:w-full opacity-90" src="/images/blog-bg.webp" alt=""> --}}
    </header>
    <section class="w-full flex flex-col items-center font-iran-sans">
        <section class="px-6 md:max-w-md flex flex-col gap-4">
            <h1 class="text-gray-900 font-bold text-4xl">{{ $post->title }}</h1>
            <h2 class="text-gray-600 text-xl">{{ $post->subtitle }}</h2>
            <div class="flex gap-4 items-center">
                <img class="rounded-full" height="80px" width="80px" src="{{ asset($post->author->avatar) }}" alt="{{ $post->author->username }}">
                <div class="flex flex-col gap-3 text-sm">
                    <span class="text-gray-700 font-bold">{{ $post->author->username }}</span>
                    <span class="text-gray-500 flex items-center gap-2">
                        <span>11 دقیقه زمان مطالعه</span>
                        <span class="w-1 h-1 rounded-full bg-gray-500 inline-block"></span>
                        <span>{{ $post->created_at->diffForHumans() }}</span>
                    </span>
                </div>
            </div>
            <div class="border-y border-gray-200 py-3">
                {{-- Like button --}}
                {{-- Comment button --}}
                {{-- Copy link button --}}
            </div>
        </section>
    </section>
</x-layout>