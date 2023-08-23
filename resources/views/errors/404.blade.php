<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>صفحه پیدا نشد!</title>
    @vite('resources/css/app.css')
</head>
<body class="w-full h-full overflow-hidden flex flex-col justify-center items-center">
    <div class="h-[80%] w-fit float-left">
        <img class="h-full w-auto" width="auto" height="auto" src="/images/errors/3.png" alt="">
    </div>
    <div class="flex gap-4 font-iran-sans">

        <a href="{{ url()->previous() }}" class="bg-x-dark-blue text-slate-50 px-4 py-2 rounded-full shadow-sm">بازگشت به صفحه قبلی</a>
        <a href="{{ route('pages.home') }}" class="bg-x-dark-blue text-slate-50 px-4 py-2 rounded-full shadow-sm">بازگشت به صفحه اصلی</a>
    </div>
</body>
</html>