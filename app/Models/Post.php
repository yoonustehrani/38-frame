<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // protected $fillable = ['title', 'description', 'avatar', 'views'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
