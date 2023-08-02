<div class="bg-creamy shadow-md rounded-b-md py-2 px-3 relative -mt-4 z-10 mb-8 flex flex-col">
    <img src="{{ $post->avatar }}" class="w-full" alt="{{ $post->title }}" />
    <div class="mt-4 relative grow flex flex-col justify-between">
        <h5 class="font-bold text-lg text-gray-800">{{ $post->title }}</h5>
        <p class="text-sm text-gray-700 text-justify px-1">{{ $post->description }}</p>
        <div class="flex justify-end">
            <a class="text-sm font-bold text-center w-fit hover:text-orange-600 hover:border-orange-600 border-transparent text-gray-500 duration-300 rounded-md mt-3 px-4 py-1 border-2 border-dashed" href={url}>بخوانید</a>
        </div>
        <hr class="my-3"/>
        <div class="flex flex-row-reverse items-center justify-between px-2 text-xs">
            <a href="/blog/{{ $post->slug }}" class="flex flex-row-reverse gap-2 items-center text-gray-600">
                <span class="rounded-full overflow-hidden">
                    <img class="h-8 w-8" src={{ $post->author->avatar }} alt={{ $post->author->name }} />
                </span>
                <span>{{ $post->author->name }}</span>
            </a>
            <div class="flex flex-row-reverse items-center gap-1">
                <img class="h-5 w-5" src="/icons/eye.svg" alt="" />
                <span class="italic">{{ $post->views }}</span>
            </div>
        </div>
    </div>
</div>