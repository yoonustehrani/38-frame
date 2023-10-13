<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LabService>
 */
class LabServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->words(random_int(1, 3), true);
        return [
            'title' => $title,
            'slug' => \Str::slug($title),
            'category_id' => \App\Models\SiteCategory::whereType('service')->inRandomOrder()->first()
        ];
    }
}
