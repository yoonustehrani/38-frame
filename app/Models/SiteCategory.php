<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteCategory extends Model
{
    use HasFactory;

    protected $fillabled = ['name', 'label', 'type', 'description'];
    public $timestamps = false;

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }
    
    // public function services()
    // {
    //     return $this->hasMany(LabService::class, 'category_id');
    // }
}
