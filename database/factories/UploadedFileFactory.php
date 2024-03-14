<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UploadedFile>
 */
class UploadedFileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => 'image',
            'name' => fake()->word(),
            'extension' => fake()->randomElement(['jpg', 'webp', 'png']),
            'path' => '/storage/public/test.jpg',
            'thumbnail_path' => '/storage/public/tn_test.jpg',
            'driver' => 'local',
            'mode' => 'user-uplaoded'
        ];
    }
}
