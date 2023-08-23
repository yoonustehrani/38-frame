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
            ['name' => 'accessory', 'label' => 'اکسسوری مربوط به عکاسی', 'description' => '']
        ];
        foreach ($categories as $category) {
            (new SiteCategory($category))->saveQuietly();
        }
    }
}
