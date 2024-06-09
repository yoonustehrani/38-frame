<section class="w-full">
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
        <input wire:model.live.debounce.300ms="search" min="3" class="font-iran-sans bg-transparent text-gray-700 h-24 text-2xl w-3/4 px-4 outline-none" type="search" name="" id="" placeholder="جستجو در مقالات 38 فریم ...">
    </section>
    <section class="w-4/5 mx-[10%] float-left mt-6 mb-12 md:px-6 py-4">
        <div class="w-full grid grid-cols-4 gap-6 font-iran-sans">
            @foreach ($posts as $post)
                <x-blog-card :post="$post"/>
            @endforeach
        </div>
        {{ $posts->links() }}
    </section>
</section>
