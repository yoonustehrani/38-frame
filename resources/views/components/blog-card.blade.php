<div class="bg-creamy shadow-md rounded-b-md py-2 px-3 relative -mt-4 z-10 mb-8 flex flex-col">
    @if ($post->avatar)
        <img class="w-full" src="{{ asset($post->avatar->path) }}" alt="{{ $post->avatar->alt }}"/>
    @endif
    <div class="mt-4 relative grow flex flex-col justify-between gap-2">
        <a href="{{ route('pages.blog.show', ['slug' => $post->slug]) }}" class="font-bold text-lg hover:text-orange-600 text-gray-800">{{ $post->title }}</a>
        <p class="text-sm text-gray-700 text-justify px-1">{{ $post->description }}</p>
        <div class="flex justify-end">
            <a class="text-sm font-bold text-center w-fit hover:text-orange-600 hover:border-orange-600 border-transparent text-gray-500 duration-300 rounded-md mt-3 px-4 py-1 border-2 border-dashed" href={{ route('pages.blog.show', ['slug' => $post->slug]) }}>بخوانید</a>
        </div>
        <hr/>
        <div class="flex flex-row-reverse items-center justify-between px-2 text-xs">
            @if ($post->author)
                <span class="flex flex-row-reverse gap-2 items-center text-gray-600">
                    <span class="rounded-full overflow-hidden">
                        <img class="h-8 w-8" src="{{ $post->author->avatar }}" alt="{{ $post->author->username }}" />
                    </span>
                    <span>{{ $post->author->username }}</span>
                </span>
            @endif
            <div class="flex flex-row-reverse items-center gap-1">
                <img class="h-5 w-5" src="/images/icons/eye.svg" alt="" />
                <span class="italic">{{ $post->views }}</span>
            </div>
        </div>
    </div>
</div>