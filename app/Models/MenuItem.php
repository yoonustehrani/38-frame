<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['title', 'url_type', 'url_value'];

    public function getUrlAttribute()
    {
        if (is_null($this->url_type) || is_null($this->url_value)) return '#';
        switch ($this->url_type) {
            case 'route':
                try {
                    return route($this->url_value);
                } catch (\Throwable $th) {
                    return '#';
                }
                break;
            default:
                return $this->url_value;
                break;
        }
    }

    public function scopePrimary(Builder $query)
    {
        return $query->whereNull('parent_id');
    }

    public function scopeActive(Builder $query)
    {
        return $query->where('active', true);
    }

    public function scopeSecondaryOf(Builder $query, int $parent_id)
    {
        return $query->whereNotNull('parent_id')->where('parent_id', $parent_id);
    }
}
