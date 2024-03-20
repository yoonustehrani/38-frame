<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::whereEmail('38frame@gmail.com')->firstOrFail();
        if (! $user->shop()->exists()) {
            Shop::factory()->for($user, 'owner')->create();
        }
    }
}
