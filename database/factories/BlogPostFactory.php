<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(3, true);
        $body = '';
        for ($i=0; $i < random_int(5, 20); $i++) { 
            $paragraph = fake()->realText(random_int(7, 9) * 500, random_int(3, 5));
            $body .= '<p>' . $paragraph . '</p>';
        }
        return [
            'title' => $title,
            'subtitle' => fake()->words(4, true),
            'description' => fake()->sentences(5, true),
            'slug' => \Str::kebab($title),
            // 'avatar' => '/images/blog-' . rand(1, 4) . '.webp',
            // 'views' => fake()->randomNumber(5),
            'published_at' => now(),
            'status' => 'published',
            'body' => $body
        ];
    }
}
