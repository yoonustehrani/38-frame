<?php

namespace Tests\Feature;

use App\Models\Shop;
use App\Models\User;
use Database\Factories\ShopFactory;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ShopTest extends TestCase
{
    // use RefreshDatabase;
    /**
     * Test if a user can register a shop.
     */
    public function test_user_can_create_a_shop(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->postJson('/api/shops', Shop::factory()->state(['iban' => '130170000000114503193004', 'accept_policy' => '1'])->make()->toArray());
        $response->assertStatus(201);
    }

    /**
     * Test if user can't own another shop
     */
    public function test_user_cannot_create_another_shop(): void
    {
        $user = User::factory()->has(Shop::factory(), 'shop')->create();
        $response = $this->actingAs($user)->postJson('/api/shops', Shop::factory()->state(['iban' => '130170000000114503193004', 'accept_policy' => '1'])->make()->toArray());
        $response->assertStatus(403);
    }

    /**
     * Test if user can change shop data
     */
    public function test_user_can_modify_shop_data(): void
    {
        $user = User::factory()->has(Shop::factory(), 'shop')->create();
        $shopResponse = $this->actingAs($user)->getJson('/api/user/shop');
        $response = $this->actingAs($user)->patchJson("/api/shops/{$shopResponse['id']}", [
            'brand' => 'modified-' . $shopResponse['brand']
        ]);
        $response->assertJson([
            'data' => [
                'brand' => 'modified-' . $shopResponse['brand']
            ]
        ]);
    }

    /**
     * Test if user is able to upload an avatar for their shop
     */
    public function test_user_can_upload_avatar_for_shop(): void
    {
        $file = UploadedFile::fake()->image(fake()->word() . '.jpg')->size(fake()->numberBetween(60, 400));
        $user = User::factory()->has(Shop::factory(), 'shop')->create();
        $shopResponse = $this->actingAs($user)->getJson('/api/user/shop');
        $response = $this->actingAs($user)->patchJson("/api/shops/{$shopResponse['id']}", [
            'avatar' => $file
        ]);
        $response->assertStatus(200);
        Storage::assertExists('public/avatars/' . sha1_file($file->getRealPath(), false) . "." . $file->guessClientExtension());
    }
}
