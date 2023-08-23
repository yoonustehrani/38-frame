<?php

namespace Database\Factories;

use App\Models\Ad;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ad>
 */
class AdFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = Ad::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $created_at = now()
            ->subDays(fake()->numberBetween(1, 10))
            ->subHours(fake()->numberBetween(1, 24))
            ->subMinutes(fake()->numberBetween(1, 60));
        $published_at = Carbon::parse($created_at)->addMinutes(random_int(30, 120));
        return [
            'title' => fake()->text(70),
            'description' => fake()->paragraphs(2, true),
            'phone_number' => '09150013422',
            'address' => fake()->streetAddress(),
            'delivery_type' => fake()->numberBetween(1, 3),
            'status' => 'confirmed',
            'expires_at' => Carbon::parse($published_at)->addMonth(),
            'published_at' => $published_at,
            'created_at' => $created_at
        ];
    }
    public function rejected()
    {
        return $this->state(fn (array $attrs) => ['status' => 'rejected', 'expires_at' => null, 'published_at' => null]);
    }
    public function awaiting_confirmation()
    {
        return $this->state(fn (array $attrs) => ['status' => 'awaiting_confirmation', 'expires_at' => null, 'published_at' => null]);
    }
    public function expired()
    {
        return $this->state(function (array $attrs) {
            $days = random_int(1, 90);
            return [
                'status' => 'expired',
                'created_at' => Carbon::parse($attrs['created_at'])->subMonths(1)->subDays($days),
                'published_at' => Carbon::parse($attrs['published_at'])->subMonths(1)->subDays($days),
                'expires_at' => Carbon::parse($attrs['published_at'])->subDays($days)
            ];
        });
    }
}
