<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id')->select('id', 'username', 'avatar');
    }

    public function scopePublished(Builder $query)
    {
        return $query->where('published_at', '<=', now());
    }
}
