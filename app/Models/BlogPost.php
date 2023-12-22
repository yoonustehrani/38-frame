<?php

namespace App\Models;

use App\Http\Resources\UploadedFileResource;
use App\Traits\HasSeoConfig;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
use HasFactory, HasSeoConfig;
    // protected $hidden = ['avatar'];
    protected $fillable = ['title', 'subtitle', 'body', 'description'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id')->select('id', 'username', 'avatar');
    }

    public function avatar()
    {
        return $this->morphToMany(UploadedFile::class, 'attachable');
    }
    
    public function categories()
    {
        return $this->morphToMany(SiteCategory::class, 'categorized');
    }

    public function scopePublished(Builder $query)
    {
        return $query->where('published_at', '<=', now());
    }

}
