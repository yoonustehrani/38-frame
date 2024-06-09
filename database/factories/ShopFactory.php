<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand' => fake()->unique()->company(),
            'category' => fake()->randomElement([1,2,3]),
            'avatar' => '/images/yoosof.webp',
            'bio' => fake()->text(300),
            'founded_in_year' => fake()->numberBetween(1300, 1402),
            'owner_fullname' => fake()->name(),
            'owner_national_id' => (string) fake()->randomNumber(5, true) . (string) fake()->randomNumber(5, true),
            'phone_number' => '09151234567',
            'meta' => [],
            'owner_id' => User::factory()
        ];
    }

    // public function withOwner()
    // {
    //     $this->for(, 'owner');
    // }
}
