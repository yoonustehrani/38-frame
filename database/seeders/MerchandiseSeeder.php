<?php

namespace Database\Seeders;

use App\Models\Merchandise;
use App\Models\Shop;
use App\Models\UploadedFile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MerchandiseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::whereEmail('38frame@gmail.com')->firstOrFail();
        $shop = $user->shop()->firstOrFail();
        Merchandise::factory(3)->for($shop)->hasAttached(UploadedFile::factory(4), [], 'images')->has(UploadedFile::factory(), 'avatar')->create();
    }
}
