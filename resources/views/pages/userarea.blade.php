<x-html-layout>
    <x-slot:head>
        <title>ناحیه کاربری</title>
        <script src="https://accounts.google.com/gsi/client?hl=fa" async></script>
        @vite('resources/css/app.css')
        @viteReactRefresh
        @vite('resources/js/react-userarea.tsx')
    </x-slot:head>
    <div id="react-userarea" class="h-full w-full overflow-hidden flex"></div>
</x-html-layout>