<?php

namespace Database\Factories;

use App\Enums\MerchandiseStatusType;
use App\Models\SiteCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Merchandise>
 */
class MerchandiseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(3, true),
            'description' => fake()->sentences(6, true),
            'available_quantity' => fake()->randomNumber(2),
            'price' => random_int(1, 100) * 100000,
            'status' => fake()->randomElement(get_enum_values(MerchandiseStatusType::class)),
            'meta' => [],
            'category_id' => SiteCategory::factory()->state(['type' => 'merchandise_group'])
        ];
    }
    public function withOffer()
    {
        return $this->state(fake()->randomElement([
            [
                'offer_type' => 'percentage',
                'offer_amount' => random_int(1, 8) * 10
            ],
            [
                'offer_type' => 'on-price',
                'offer_amount' => 5000
            ]
        ]));
    }
}
