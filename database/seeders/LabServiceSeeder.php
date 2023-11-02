<?php

namespace Database\Seeders;

use App\Models\LabService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LabServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
            try {
                $category = \App\Models\SiteCategory::select('id')->whereType('service')->whereName($group)->firstOrFail();
                foreach ($service_names as $name) {
                    (new LabService([
                        'title' => $name,
                        'slug' => \Str::slug($name),
                        'category_id' => $category->getKey()
                    ]))->saveQuietly();
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }
}
