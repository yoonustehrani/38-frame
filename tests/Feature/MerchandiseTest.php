<?php

namespace Tests\Feature;

use App\Enums\MerchandiseStatusType;
use App\Models\Merchandise;
use App\Models\Shop;
use App\Models\UploadedFile;
// use Illuminate\Foundation\Testing\DatabaseTruncation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MerchandiseTest extends TestCase
{
    /**
     * Test whether Merchandise-Avatar relationship works
     */
    function test_avatar_relationship()
    {
        $merchandise = Merchandise::factory()->for(Shop::factory(), 'shop')->create();
        $avatar = UploadedFile::factory()->create();
        $merchandise->avatar()->associate($avatar);
        $merchandise->save();

        $this->assertInstanceOf(UploadedFile::class, $merchandise->avatar);
        $this->assertEquals($avatar->id, $merchandise->avatar->id);
    }

    /**
     * Test whether Merchandise-Images relationship works
     */
    function test_images_relationship()
    {
        $merchandise = Merchandise::factory()->for(Shop::factory(), 'shop')->create();
        $images = UploadedFile::factory(random_int(2, 5))->create();
        $merchandise->images()->sync($images->pluck('id'));
        $this->assertCount($images->count(), $merchandise->images);
        $images->each(function(UploadedFile $img) use($merchandise) {
            $this->assertTrue($merchandise->images->contains($img));
        });
    }

    /**
     * Test Unconfirmed merchandise is unavailable
     */
    function test_unconfirmed_merchandise_unavailable()
    {
        $merchandise = Merchandise::factory()->for(Shop::factory(), 'shop')->state([
            'status' => fake()->randomElement([MerchandiseStatusType::AwaitingConfirmation, MerchandiseStatusType::Rejected])
        ])->create();
        $response = $this->get("/shops/{$merchandise->shop_id}/merchandise/{$merchandise->id}");
        $response->assertStatus(404);
    }

    /**
     * Test Unconfirmed merchandise is unavailable
     */
    function test_confirmed_merchandise_available()
    {
        $merchandise = Merchandise::factory()->for(Shop::factory(), 'shop')->state([
            'status' => MerchandiseStatusType::Verified,
            'published_at' => now()
        ])->create();
        $response = $this->get("/shops/{$merchandise->shop_id}/merchandise/{$merchandise->id}");
        $response->assertStatus(200);
    }
}
