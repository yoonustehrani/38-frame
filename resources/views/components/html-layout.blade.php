<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl" class="overflow-y-hidden">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{ $head }}
</head>
<body class="w-full h-full overflow-y-auto overflow-x-hidden {{ $className ?? '' }}">
    {{ $slot }}
</body>
</html>