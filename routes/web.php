<?php

use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\LabController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $roadmap = [
        [
            'title' => 'تهیه دوربین آنالوگ',
            'icon' => '028-top view',
            'description_title' => 'به یک دوربین آنالوگ نیاز دارید.',
            'description' => 'پیش از شروع عکاسی آنالوگ نیاز به یک دوربین آنالوگ سالم دارید! اگر در وسایل پدر یا انباری خانه مادربزرگتان یک دوربین آنالوگ قدیمی پیدا کردید، ممکن است بتوانید با همان دوربین عکاسی آنالوگ را آغاز کنید البته به شرطی که دوربین شما سالم باشد. در صورتی که یک دوربین آنالوگ پیدا کردید ابدا در آن را بدون بررسی باز نکنید! ممکن است از گذشته داخل دوربین شما فیلمی باقی مانده باشد و با باز کردن در دوربین نابود شود... برای اطلاعات بیشتر «راهنما تهیه دوربین آنالوگ» را مطالعه کنید.'
        ],
        [
            'title' => 'خرید فیلم آنالوگ',
            'icon' => '010-film camera',
            'description_title' => 'باید برای دوربین خود فیلم آنالوگ تهیه کنید.',
            'description' => 'پس از تهیه دوربین آنالوگ برای عکاسی نیاز به تهیه فیلم آنالوگ خواهید داشت. انواع و اقسام فیلم‌های آنالوگ در دسته بندی‌های متفاوت وجود دارد که هر کدام ویژگی‌ها و وایب متفاوت خود را برای شما به ارمغان می‌آورند. برای تهیه فیلم آنالوگ می‌بایست متناسب با نوع دوربین و نیاز خود فیلم تهیه کنید... برای اطلاعات بیشتر «راهنما تهیه فیلم آنالوگ» را مطالعه کنید.'
        ],
        [
            'title' => 'نورسنجی و عکاسی',
            'icon' => '020-light meter',
            'description_title' => 'با رعایت اصول عکاسی کنید',
            'description' => 'اصول بسیار زیادی در خصوص عکاسی آنالوگ وجود ندارد و مهم ترین همین اندک اصول نیز با نورسنجی پیش از ثبت عکس آغاز می‌شود. یک عکاس آنالوگ حرفه‌ای آگاه به شیوه نورسنجی و تجهیزاتش می‌باشد. پس از نورسنجی مهم ترین اصل جا انداختن فیلم در دوربین و جمع کردن فیلم از دوربین به شکل استاندارد است... برای کسب اطلاعات بیشتر «اصول اولیه عکاسی آنالوگ» را مطالعه کنید.'
        ],
        [
            'title' => 'ظهور فیلم آنالوگ',
            'icon' => '008-color',
            'description_title' => 'فیلم آنالوگ خود را به تاریکخانه ها تحویل دهید!',
            'description' => 'پس از عکاسی کردن تمامی فریم‌های حلقه آنالوگ خود نیاز است که فیلم آنالوگ خود را در فرایند ظهور و ثبوت شیمیایی ظاهرکند! این فرایند را بسیاری از عکاسان به تاریکخانه‌ها و لابراتوار‌ها واگذار می‌کنند. تاریکخانه فیلم آنالوگ شما را ظاهر می‌کند و آن را اسکن می‌کرده یا چاپ شده به شما تحویل می‌دهد. البته بعضی از عکاسان در تاریکخانه خانگی خود به ظهور و اسکن می‌پردازند. برای کسب اطلاعات بیشتر «فرایند ظهور و ثبوت فیلم آنالوگ» را مطالعه کنید.'
        ],
        [
            'title' => 'اسکن فیلم آنالوگ',
            'icon' => '009-external hard drive',
            'description_title' => 'نگاتیو خود را اسکن یا چاپ کنید',
            'description' => 'پس از ظاهر شدن نگاتیو‌هایتان می‌توانید آن‌ها را اسکن کنید یا حتی آن‌ها را به شیوه‌های مختلفی چاپ کنید. لابراتوار‌های عکاسی آنالوگ به اسکن و چاپ عکس‌های شما نیز می‌پردازند. پس از اسکن و تبدیل کردن نمایه‌ها به فایل از آن ها لذت ببرید و حتی می‌توانید آن ها را در «ژورنال 38فریم» منتشر کنید.'
        ]
    ];
    return view('pages.home', compact('roadmap'));
})->name('pages.home');

Route::view('labs', 'pages.labs.index')->name('pages.labs.index');
Route::get('labs/{lab}', [LabController::class, 'show'])->name('pages.labs.show');
Route::view('contact', 'pages.contact')->name('pages.contact');
Route::view('about', 'pages.about')->name('pages.about');
Route::get('blog', [BlogPostController::class, 'index'])->name('pages.blog.index');
Route::get('blog/{slug}', [BlogPostController::class, 'show'])->name('pages.blog.show');
Route::view('userarea/{path?}', 'pages.userarea')->where('path', '.*')->name('userarea');
Route::view('38panel/{path?}', 'pages.admin')->where('path', '.*')->name('admin');