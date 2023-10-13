<x-html-layout className="overflow-y-auto overflow-x-hidden float-left scroll-smooth z-0">
    <x-slot:head>
        <title>{{ $title ?? 'Untitled Page' }}</title>
        @vite('resources/css/app.css')
        <style>
            :root {
                --size: 50vmin;
                --white: #fff;
                --blue: #3051f1;
                --purple: #c92bb7;
                --red: #f73344;
                --orange: #fa8e37;
                --yellow: #fcdf8f;
                --yellow_to: #fbd377;
            }
        </style>
    </x-slot:head>
    {{ $slot }}
    <x-footer classNames="float-left"/>
    @viteReactRefresh
    @vite('resources/js/react-app.tsx')
    @vite('resources/js/app.js')
</x-html-layout>