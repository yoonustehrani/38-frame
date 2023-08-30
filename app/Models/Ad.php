<?php

namespace App\Models;

use App\Enums\AdStatusType;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ad extends Model
{
    use HasFactory, HasUlids, SoftDeletes;
    protected $casts = [
        'expires_at' => 'datetime',
        'published_at' => 'datetime'
    ];
    public $appends = ['status_fa'];

    public function getStatusFaAttribute() {
        return AdStatusType::tryFrom($this->attributes['status'])->label();
    }
    public function publisher()
    {
        return $this->morphTo();
    }
}
