<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabService extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function category()
    {
        return $this->belongsTo(SiteCategory::class, 'category_id')->whereType('service');
    }
}
