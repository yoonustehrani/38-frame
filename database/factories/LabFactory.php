<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lab>
 */
class LabFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->randomElement(['تاریکخانه', 'لابراتوار', 'لابراتوار خانگی']) . " " . fake()->lastName();
        return [
            'brand' => $title,
            'slug' => \Str::slug($title),
            'category' => fake()->randomElement(array_keys([
                'special-lab' => 'لابراتوار تخصصی آنالوگ',
                'photography-darkroom' => 'لابراتوار یا تاریکخانه عکاسی',
                'home-lab' => 'لابراتوار شخصی / لابراتوار خانگی'
            ])),
            'owner_id' => User::factory(),
            'owner_fullname' => fake()->firstName() . " " . fake()->lastName(),
            'owner_national_id' => fake()->randomNumber(5) . "" . fake()->randomNumber(5),
            'bio' => fake()->realText(300, 3),
            'founded_in_year' => random_int(1350, 1402),
            'address' => fake()->streetAddress(),
            'address_line' => '0' . fake()->numberBetween(11, 70) . '3' . fake()->randomNumber(7),
            'phone_number' => random_phone_number(),
            'website' => fake()->domainName(),
            'meta' => [
                'social' => [
                    'instagram' => fake()->userName(),
                    'telegram_channel' => fake()->userName()
                ]
            ],
            'active' => fake()->boolean(80),
            'city_id' => City::inRandomOrder()->first()->id
        ];
    }
}
