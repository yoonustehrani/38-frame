<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => fake()->unique()->userName(),
            'credit' => (random_int(1, 1000) / 10) * 10_000,
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'phone_number' => random_phone_number(),
            'phone_verified_at' => now(),
            'password' => bcrypt('password'),
            'city_id' => City::whereName('مشهد')->first()->id,
            'avatar' => 'images/yoosof.webp',
            'meta' => [],
            // 'remember_token' => Str::random(10),
        ];
    }

    // /**
    //  * Indicate that the model's email address should be unverified.
    //  */
    // public function unverified(): static
    // {
    //     return $this->state(fn (array $attributes) => [
    //         'email_verified_at' => null,
    //     ]);
    // }
}
