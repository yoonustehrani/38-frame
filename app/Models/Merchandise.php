<?php

namespace App\Models;

use App\Enums\MerchandiseStatusType;
use App\Traits\HasMetaAttribute;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class Merchandise extends Model
{
    use HasFactory, HasMetaAttribute, HasUlids, SoftDeletes;
    public $table = 'merchandise';
    protected $fillable = ['title', 'description', 'category_id', 'price', 'offer_type', 'offer_amount'];

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function avatar()
    {
        return $this->belongsTo(UploadedFile::class, 'avatar_id');
    }

    public function images()
    {
        return $this->morphToMany(UploadedFile::class, 'attachable');
    }

    public function scopeAvailable(Builder $query)
    {
        $query->whereNotNull('published_at')->whereStatus(MerchandiseStatusType::Verified);
    }

    public function scopeUnavailable(Builder $query)
    {
        $query->whereNull('Verified_at')->where('status', '!=', MerchandiseStatusType::Verified);
    }
}
