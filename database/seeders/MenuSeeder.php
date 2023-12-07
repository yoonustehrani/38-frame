<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menu = new Menu([
            'title' => 'منوی اصلی',
            'key' => 'main'
        ]);
        if ($menu->save()) {
            $this->callWith(MenuItemSeeder::class, compact('menu')); 
        }
    }
}
