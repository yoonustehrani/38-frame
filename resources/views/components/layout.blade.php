<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
    {{-- <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'> --}}
</head>
<body class="overflow-y-auto overflow-x-hidden float-left">
    {{ $slot }}
    <x-footer classNames="float-left"/>
    @viteReactRefresh
    @vite('resources/js/react-app.tsx')
    @vite('resources/js/app.js')
</body>
</html>