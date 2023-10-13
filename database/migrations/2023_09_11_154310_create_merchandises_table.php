<?php

use App\Enums\MerchandiseStatusType;
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
        Schema::create('merchandise', function (Blueprint $table) {
            $table->ulid()->primary();
            $table->foreignId('shop_id')->references('id')->on('shops')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('title');
            $table->text('description');
            $table->integer('available_quantity')->unsigned();
            $table->bigInteger('price');
            $table->enum('offer_type', [
                'percentage',
                'on-price'
            ])->nullable();
            $table->bigInteger('offer_amount')->nullable();
            $table->foreignId('category_id')->references('id')->on('site_categories')->cascadeOnDelete()->cascadeOnUpdate();
            $table->enum('status', get_enum_values(MerchandiseStatusType::class))->default(MerchandiseStatusType::AwaitingConfirmation->value);
            $table->json('meta');
            $table->timestamps();
            $table->timestamp('published_at');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merchandise');
    }
};
