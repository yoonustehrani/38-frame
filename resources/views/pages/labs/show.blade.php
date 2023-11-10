<x-layout title="{{ $lab->brand }} | تاریکخانه و لابراتوار">
    <header class="bg-repeat bg-center shadow-inner shadow-black/50 w-full h-72 flex justify-center items-end font-iran-sans" style="background-image: url({{ asset('images/patterns/camera-1.webp') }})">
        <x-nav classNames="absolute top-0 rounded-t-md bg-x-green/95">
            {{-- <div class="bg-x-green/70 shadow-md w-[8.9rem] h-[21rem] left-0 ml-4 top-24 px-2 py-2 -z-10 absolute rounded-b-full before-green flex flex-col gap-2">
                <p class="grow bg-black/10 font-bold shadow-inner rounded-lg text-center leading-relaxed text-black/80 px-2 py-3 text-2xl">
                    در شرایط <span class="italic">آنالوگ</span>
                    تماس بگیرید!
                </p>
                <a href="tel:+989365746828" class="w-32 h-32 px-6 py-7 svg-32 svg-white bg-black/10 shadow-inner rounded-full grow-0">
                    @php icon('phone-call') @endphp
                </a>
            </div> --}}
        </x-nav>
    </header>
    <section class="w-4/5 mx-[10%] grid md:grid-cols-3 place-items-start gap-4 font-iran-sans -mt-16">
        <div class="md:col-span-1 grid grid-cols-1 grid-flow-row gap-6">
            <section class="w-full pb-6 px-3 h-fit flex flex-col gap-6 items-center float-left bg-white border border-black/10 shadow-sm rounded-lg">
                @if ($lab->avatar)
                    <div class="h-32 w-32 -mt-16 rounded-full ring-4 ring-black ring-opacity-40 overflow-hidden">
                        <img class="h-full w-auto" src="{{ asset($lab->avatar) }}" alt="">
                    </div>
                @else
                    <span class="h-2 block w-full"></span>
                @endif
                <h1 class="inline text-gray-700 text-3xl font-bold">{{ $lab->brand }}</h1>
                <span class="text-gray-600"><span class="font-bold">مدیریت :‌ </span>{{ $lab->owner_fullname }}</span>
                <div class="flex flex-wrap justify-center items-start gap-2">
                    @if ($lab->category)
                        <h2 class="bg-x-yellow/40 text-yellow-800 py-1 px-2 rounded-full font-bold">@lang('models.labs.category.' . $lab->category->name)</h2>
                    @endif
                    @if ($lab->active)
                        <span class="bg-emerald-500/40 text-emerald-800 py-1 px-2 rounded-full font-bold text-sm">فعال</span>
                    @else
                        <span class="bg-red-500/40 text-red-800 py-1 px-2 rounded-full font-bold text-sm">غیرفعال</span>
                    @endif
                </div>
                <div class="flex flex-col gap-3 w-3/4">
                    <span class="text-gray-700 font-bold w-full text-center">راه های ارتباطی</span>
                    <hr class="w-full">
                    <ul class="flex flex-col items-center gap-4 py-2">
                        @if ($lab->website)
                            <li class="font-sans font-semibold">
                                <a rel="no-follow" href="{{ $lab->website }}" class="text-sky-600 hover:text-sky-800 fill-sky-600 hover:fill-sky-800 duration-300 flex flex-row-reverse flex-wrap justify-center items-center gap-1">
                                    <svg class="fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M13.845,17.267l-3.262,3.262A5.028,5.028,0,0,1,3.472,13.42l3.262-3.265A1,1,0,0,0,5.319,8.741L2.058,12.006A7.027,7.027,0,0,0,12,21.943l3.262-3.262a1,1,0,0,0-1.414-1.414Z"/><path d="M21.944,2.061A6.979,6.979,0,0,0,16.975,0h0a6.983,6.983,0,0,0-4.968,2.057L8.74,5.32a1,1,0,0,0,1.414,1.415l3.265-3.262A4.993,4.993,0,0,1,16.973,2h0a5.028,5.028,0,0,1,3.554,8.583l-3.262,3.262A1,1,0,1,0,18.68,15.26L21.942,12A7.037,7.037,0,0,0,21.944,2.061Z"/><path d="M14.293,8.293l-6,6a1,1,0,1,0,1.414,1.414l6-6a1,1,0,0,0-1.414-1.414Z"/>
                                    </svg>
                                    {{ $lab->website }}
                                </a>
                            </li>
                        @endif
                        <li class="flex flex-wrap justify-center items-center gap-2">
                            <a dir="ltr" class="text-gray-700 hover:text-gray-800 duration-300 text-lg underline underline-offset-4 font-sans" href="tell:{{ $lab->address_line }}">{{ \Str::substr($lab->address_line, 0, 3) }} {{ \Str::substr($lab->address_line, 3, 4) }} {{ \Str::substr($lab->address_line, 7) }}</a>
                        </li>
                        <li class="flex flex-wrap justify-center items-center gap-2">
                            <a dir="ltr" class="text-gray-700 hover:text-gray-800 duration-300 text-lg underline underline-offset-4 font-sans" href="sms:{{ $lab->phone_number }}">{{ \Str::substr($lab->phone_number, 0, 4) }} {{ \Str::substr($lab->phone_number, 4, 3) }} {{ \Str::substr($lab->phone_number, 7) }}</a>
                            <span class="text-sm rounded-sm bg-gray-300/40 text-gray-500 px-1 mt-1">فقط sms</span>
                        </li>
                        @isset ($lab->meta->social)
                            <li class="flex flex-wrap justify-center items-center gap-2 font-sans w-fit">
                                @if ($lab->meta->social->instagram)
                                    <a class="bg-rose-200/40 text-rose-800 inline-flex flex-row-reverse gap-1 items-center justify-center py-1 px-2 rounded-lg" rel="nofollow" href="https://instagram.com/{{ $lab->meta->social->instagram }}">
                                        <img class="w-4 h-4 inline" width="20" src="{{ asset('images/icons/social/instagram.svg') }}" alt="">
                                        <span class="inline-block">{{ $lab->meta->social->instagram }}</span>
                                    </a>
                                @endif
                                @if ($lab->meta->social->telegram_channel)
                                    <a class="bg-sky-200/40 text-sky-800 inline-flex flex-row-reverse gap-1 items-center justify-center py-1 px-2 rounded-lg" rel="nofollow" href="https://t.me/{{ $lab->meta->social->telegram_channel }}">
                                        <img class="w-4 h-4 inline" width="20" src="{{ asset('images/icons/social/telegram.svg') }}" alt="">
                                        <span class="inline-block">{{ $lab->meta->social->telegram_channel }}</span>
                                    </a>
                                @endif
                            </li>
                        @endisset
                    </ul>
                </div>
                <div class="flex flex-col items-center gap-2 w-3/4">
                    <span class="text-gray-700 font-bold w-full text-center text-sm">آخرین ویرایش این صفحه</span>
                    <hr class="w-full">
                    <span class="text-sm rounded-md bg-gray-300/40 text-gray-500 px-2 py-1 mt-1 w-fit">{{ $lab->updated_at->diffForHumans() }}</span>
                </div>
            </section>
            <section class="py-6 bg-white border border-black/10 shadow-sm rounded-lg flex flex-col justify-center gap-2 px-8">
                <h2 class="font-bold text-lg text-gray-800 flex flex-wrap gap-2 justify-center md:justify-start items-center">درباره {{ $lab->brand }} <span class="bg-purple-500/40 py-px text-purple-800 mx-2 px-2 rounded-md font-bold text-xs">از {{ persian_numbers($lab->founded_in_year) }}</span></h2>
                <p class="text-gray-600">{{ $lab->bio }}</p>
            </section>
        </div>
        <div class="md:col-span-2 overflow-hidden grid grid-cols-1 grid-flow-row gap-6">
            <section class="w-full bg-white border border-black/10 shadow-sm rounded-lg p-4">
                @if ($lab->services->count())
                    @foreach ($lab->services->groupBy('category.parent.label') as $group => $services)
                        <div class="w-full h-fit px-5">
                            {{-- overflow-x-auto overflow-y-hidden --}}
                            <table class="flex flex-row flex-wrap md:table md:table-fixed w-full text-center border-separate border-spacing-y-2">
                                {{-- min-w-full w-auto max-w-max  --}}
                                <caption class="py-1 mt-6 mb-3 text-2xl font-bold text-gray-800 w-full h-fit md:w-fit md:px-3 border-0 md:border-r-2 border-gray-800">{{ $group ?: 'دیگر خدمات' }}</caption>
                                <thead class="w-0 overflow-hidden md:overflow-visible md:w-auto">
                                    <tr class="h-12 text-gray-800 flex flex-col md:table-row">
                                        <th class="p-3 md:p-0 md:w-24 sticky">ردیف</th>
                                        <th class="p-3 md:p-0 md:w-48">عنوان</th>
                                        <th class="p-3 md:p-0 md:w-36">قیمت</th>
                                        <th class="p-3 md:p-0 md:w-auto">توضیحات</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-800 grow">
                                    @foreach ($services as $service)
                                        <tr class="responsive flex flex-col md:table-row bg-gray-100 first-last-rounded md:h-24 relative">
                                            <th aria-label="ردیف" scope="row" class="p-3 text-3xl px-4 text-gray-900 border-dashed border-b-2 md:border-b-0 md:border-l-2 border-gray-300 relative circle-divider before:bg-white after:bg-white">
                                                {{ persian_numbers($loop->index + 1) }}
                                            </th>
                                            <td class="p-3" aria-label="عنوان"  class="px-3">{{ $service->category->label }}</td>
                                            <td class="p-3" aria-label="قیمت" >
                                                <div class="flex flex-col">
                                                    @if ($service->price)
                                                        <span class="block">{{ persian_numbers(number_format($service->price)) }} تومان</span>
                                                    @else
                                                    - - -
                                                    @endif
                                                    @if ($service->price_note)
                                                    <p class="text-xs text-gray-600 pt-2">{{ $service->price_note }}</p>    
                                                    @endif
                                                </div>
                                            </td>
                                            <td class="p-3 text-sm" aria-label="توضیحات" class="text-sm">{{ $service->description }}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endforeach
                @else
                    <p class="text-2xl font-bold" colspan="5">هیچ خدماتی لیست نشده است!</p>
                @endif
            </section>
            <section class="w-full bg-white border border-black/10 shadow-sm rounded-lg p-4 flex flex-col items-center gap-6">
                <h3 class="text-gray-800 font-bold text-center text-xl mt-4">فرم سفارش خدمات لابراتوار</h3>
                <hr class="w-3/4">
                <section class="w-full px-6 relative flex justify-center md:items-center">
                    <p class="absolute text-3xl text-gray-600 font-bold italic z-10 backdrop-blur py-4 text-center">Coming soon | به زودی در دسترس خواهد بود</p>
                    <form action="#" method="GET" class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border border-black/10 text-gray-700 rounded-md py-8 px-4 blur-[3px]">
                        <div>
                            <label class="mb-2 block text-sm" for="fullname">نام و نام خانوادگی</label>
                            <input id="fullname" type="text" disabled class="form-input px-3 py-2">
                        </div>
                        <div>
                            <label class="mb-2 block text-sm" for="phone_number">شماره تماس</label>
                            <input id="phone_number" type="text" disabled class="form-input px-3 py-2">
                        </div>
                        <div>
                            <label class="mb-2 block text-sm" for="fullname">کد پستی</label>
                            <input id="fullname" type="text" disabled class="form-input px-3 py-2">
                        </div>
                        <div>
                            <label class="mb-2 block text-sm" for="phone_number">خدمات درخواستی</label>
                            <select id="phone_number" type="text" disabled class="form-input px-3 py-2">
                                <option value="">انتخاب کنید</option>
                            </select>
                        </div>
                        <div class="col-span-full">
                            <label class="mb-2 block text-sm" for="phone_number">توضیحات</label>
                            <textarea disabled class="form-textarea px-3 py-2" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    </section>
</x-layout>