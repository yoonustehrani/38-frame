<x-html-layout>
    <x-slot:head>
        <title>پنل مدیریت</title>
        @vite('resources/css/app.css')
        @viteReactRefresh
        @vite('resources/js/react-admin.tsx')
    </x-slot:head>
    <div id="react-admin-panel" class="h-full w-full overflow-hidden flex"></div>
</x-html-layout>