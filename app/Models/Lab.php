<?php

namespace App\Models;

use App\Traits\HasMetaAttribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lab extends Model
{
    use HasFactory, HasMetaAttribute;

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function services()
    {
        return $this->belongsToMany(LabService::class, 'lab_service', 'lab_id', 'service_id')->withPivot(['price', 'price_note', 'description']);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
