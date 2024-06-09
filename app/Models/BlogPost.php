<?php

namespace App\Models;

use App\Http\Resources\UploadedFileResource;
use App\Traits\HasSeoConfig;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

class BlogPost extends Model
{
    use HasFactory, HasSeoConfig;
    protected $fillable = ['title', 'subtitle', 'body', 'description'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id')->select('id', 'username', 'avatar');
    }
    public function avatar()
    {
        return $this->morphOne(Avatar::class, 'relatable')->with('file');
    }
    // public function categories()
    // {
    //     return $this->morphToMany(SiteCategory::class, 'categorized');
    // }

    public function scopePublished(Builder $query)
    {
        return $query->where('published_at', '<=', now());
    }
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'tagged', 'taggable');
    }
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorized', 'categorizable');
    }
}
