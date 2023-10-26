<x-html-layout>
    <x-slot:head>
        <title>ناحیه کاربری</title>
        @vite('resources/css/app.css')
        @viteReactRefresh
        @vite('resources/js/react-userarea.tsx')
    </x-slot:head>
    <div id="react-userarea" class="h-full w-full overflow-hidden flex"></div>
</x-html-layout>