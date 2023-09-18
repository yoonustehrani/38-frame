<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;
    protected $fillable = ['brand', 'category', 'bio', 'founded_in_year', 'owner_fullname', 'owner_national_id', 'phone_number', 'meta'];

    public function meta(): Attribute
    {
        return new Attribute(
            get: fn() => json_decode($this->attributes['meta']),
            set: fn($value) => json_encode($value)
        );
    }
}
