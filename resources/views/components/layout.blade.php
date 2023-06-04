<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Untitled Page' }}</title>
    @vite('resources/css/app.css')
</head>
<body class="overflow-y-auto overflow-x-hidden">
    {{ $slot }}
    @vite('resources/js/app.js')
</body>
</html>