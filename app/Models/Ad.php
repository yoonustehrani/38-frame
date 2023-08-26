<?php

namespace App\Models;

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
        return __("models.{$this->table}.status.{$this->attributes['status']}");
    }
    public function publisher()
    {
        return $this->morphTo();
    }
}
