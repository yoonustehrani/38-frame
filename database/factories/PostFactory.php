<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(3, true);
        return [
            'title' => $title,
            'description' => fake()->sentences(5, true),
            'slug' => \Str::kebab($title),
            'avatar' => '/images/blog-' . rand(1, 4) . '.webp',
            'views' => fake()->randomNumber(5)
        ];
    }
}
