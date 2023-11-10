<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabService extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['service_id', 'price', 'price_note', 'description'];
    public function category()
    {
        return $this->belongsTo(SiteCategory::class, 'service_id')->whereType('service');
    }
}
