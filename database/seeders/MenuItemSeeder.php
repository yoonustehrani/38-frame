<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Menu $menu): void
    {
        if ($menu->getKey() > 0) {
            $items = [
                [
                    'title' => 'صفحه اصلی',
                    'url_type' => 'route',
                    'url_value' => 'pages.home'
                ],
                [
                    'title' => 'تاریکخانه ها / تعمیرکاران',
                    'url_type' => 'route',
                    'url_value' => 'pages.labs.index'
                ],
                [
                    'title' => 'درباره ما',
                    'url_type' => 'route',
                    'url_value' => 'pages.about'
                ],
                [
                    'title' => 'تماس با ما',
                    'url_type' => 'route',
                    'url_value' => 'pages.contact'
                ],
                [
                    'title' => 'ژورنال عکاسی',
                ],
                [
                    'title' => 'وبلاگ',
                    'url_type' => 'route',
                    'url_value' => 'pages.blog.index'
                ],
            ];
            for ($i=0; $i < count($items); $i++) { 
                $instance = new MenuItem($items[$i]);
                $instance->order = $i + 1;
                $menu->items()->save($instance);
            }
        }
    }
}
