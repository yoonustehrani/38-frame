<?php

namespace Database\Seeders;

use App\Models\Lab;
use App\Models\LabService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LabSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call(LabServiceSeeder::class);
        $service_pivots = function()
        {
            return [
                //  fake()->sentence(random_int(5, 12), true)
                'description' => \Str::words(fake()->realText(), fake()->numberBetween(15, 30), ''),
                'price' => (int) (fake()->numberBetween(1000, 10000) / 10) * 1000,
                'price_note' => fake()->randomElement([\Str::words(fake()->realText(), fake()->numberBetween(3, 10), ''), null]),
            ];
        };
        Lab::factory()
            ->count(5)
            ->hasAttached(LabService::select('id')->inRandomOrder()->limit(3)->get(), $service_pivots, 'services')
            ->create();
        Lab::factory()
            ->count(10)
            ->hasAttached(LabService::select('id')->inRandomOrder()->limit(2)->get(), $service_pivots, 'services')
            ->create();
        Lab::factory()
            ->count(3)
            ->hasAttached(LabService::select('id')->inRandomOrder()->limit(6)->get(), $service_pivots, 'services')
            ->create();
    }
}
