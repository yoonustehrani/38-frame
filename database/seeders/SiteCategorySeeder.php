<?php

namespace Database\Seeders;

use App\Models\SiteCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SiteCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'film', 'label' => 'فیلم عکاسی', 'description' => ''],
            ['name' => 'camera', 'label' => 'دوربین عکاسی', 'description' => ''],
            ['name' => 'photography_equipments', 'label' => 'تجهیزات عکاسی', 'description' => ''],
            ['name' => 'lab_material', 'label' => 'تجهیزات تاریکحانه', 'description' => ''],
            ['name' => 'accessory', 'label' => 'اکسسوری مربوط به عکاسی', 'description' => ''],
            ['name' => 'process_photo', 'label' => 'خدمات ظهور عکس', 'description' => '', 'type' => 'service'],
            ['name' => 'scan_photo', 'label' => 'خدمات اسکن عکس', 'description' => '', 'type' => 'service'],
            ['name' => 'repairment', 'label' => 'خدمات تعمیرات دوربین و تجهیزات عکاسی', 'description' => '', 'type' => 'service'],
            ['type' => 'lab_category', 'name' => 'special-lab', 'label' => 'لابراتوار تخصصی آنالوگ'],
            ['type' => 'lab_category', 'name' => 'photography-darkroom', 'label' => 'لابراتوار یا تاریکخانه عکاسی'],
            ['type' => 'lab_category', 'name' => 'home-lab', 'label' => 'لابراتوار شخصی / لابراتوار خانگی']
        ];
        foreach ($categories as $category) {
            (new SiteCategory($category))->saveQuietly();
        }
    }
}
