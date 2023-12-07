<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'key'];
    public function items()
    {
        return $this->hasMany(MenuItem::class);
    }
}
