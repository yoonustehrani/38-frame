<?php

namespace App\Models;

use App\Traits\HasMetaAttribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory, HasMetaAttribute;
    protected $fillable = ['brand', 'category', 'bio', 'founded_in_year', 'owner_fullname', 'owner_national_id', 'phone_number'];
}
