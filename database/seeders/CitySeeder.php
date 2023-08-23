<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = json_decode(file_get_contents(__DIR__ . '/' . 'cities.json'));
        foreach ($cities as $city) {
            (new City(['name' => $city->name, 'province_id' => $city->province_id]))->saveQuietly();
        }
    }
}
