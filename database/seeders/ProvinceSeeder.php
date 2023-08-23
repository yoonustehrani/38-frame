<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $provinces = json_decode(file_get_contents(__DIR__ . '/' . 'provinces.json'));

        foreach ($provinces as $province) {
            (new Province(['name' => $province->name]))->saveQuietly();
        }
    }
}
