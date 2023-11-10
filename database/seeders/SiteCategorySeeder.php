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
            ['name' => 'print', 'label' => 'خدمات چاپ آنالوگ', 'description' => '', 'type' => 'service'],
            ['type' => 'lab_category', 'name' => 'special-lab', 'label' => 'لابراتوار تخصصی آنالوگ'],
            ['type' => 'lab_category', 'name' => 'photography-darkroom', 'label' => 'لابراتوار یا تاریکخانه عکاسی'],
            ['type' => 'lab_category', 'name' => 'home-lab', 'label' => 'لابراتوار شخصی / لابراتوار خانگی']
        ];
        foreach ($categories as $category) {
            (new SiteCategory($category))->saveQuietly();
        }
        $service_groups = [
            'process_photo' => [
                'ظهور سیاه و سفید',
                'ظهور رنگی',
                'ظهور سینمایی',
                'ظهور اسلاید',
                'ظهور ریورسال',
            ],
            'scan_photo' => [
                'اسکن عکس',
            ],
            'repairment' => [
                'تعمیر دوربین و تجهیزات'
            ],
            'print' => [
                'چاپ آنالوگ'
            ]
        ];
        foreach ($service_groups as $group => $service_names) {
            $category = \App\Models\SiteCategory::select('id')->whereType('service')->whereName($group)->firstOrFail();
            foreach ($service_names as $name) {
                (new SiteCategory([
                    'label' => $name,
                    'name' => str_replace(' ', '-', $name),
                    'type' => 'service',
                    'parent_id' => $category->getKey()
                ]))->saveQuietly();
            }
        }
        
    }
}
