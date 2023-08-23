<?php

use App\Enums\AdDeliveryType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->ulid('id');
            $table->morphs('publisher'); // App\Models\User or App\Models\Shop
            $table->string('title', 90);
            $table->foreignId('category_id')->nullable()->references('id')->on('site_categories')->nullOnDelete()->cascadeOnUpdate();
            $table->enum('delivery_type', array_map(fn($type) => $type->value, AdDeliveryType::cases()));
            // TODO: add new enum class for status field
            $table->enum('status', [
                'awaiting_confirmation',
                'rejected',
                'confirmed',
                'expired'
            ]);
            $table->text('description');
            $table->foreignId('province');
            $table->foreignId('city_id')->nullable()->references('id')->on('cities')->nullOnDelete()->cascadeOnUpdate();
            $table->string('phone_number');
            $table->tinyText('address')->nullable();
            $table->timestamps();
            $table->timestamp('published_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->softDeletes();
            $table->binary('meta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};