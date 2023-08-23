<?php

namespace Database\Seeders;

use App\Models\Ad;
use App\Models\City;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $city = City::whereName('مشهد')->first();
        $state = [
            'city_id' => $city->id,
            'province' => $city->province->id
        ];
        Ad::factory()->count(3)->for(
            User::factory(), 'publisher'
        )->state($state)->create();
        Ad::factory()->count(2)->for(
            User::factory(), 'publisher'
        )->expired()->state($state)->create();
        Ad::factory()->count(1)->for(
            User::factory(), 'publisher'
        )->awaiting_confirmation()->state($state)->create();
        Ad::factory()->count(2)->for(
            User::factory(), 'publisher'
        )->rejected()->state($state)->create();
    }
}
