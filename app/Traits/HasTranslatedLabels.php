<?php 

namespace App\Traits;

trait HasTranslatedLabels {
    public function label(): string {
        return static::getLabel($this);
    }

    public static function getLabel(self $value): string {
        return __(\Str::lcfirst(str_replace(['App\\', '\\'], ['', '.'], self::class)) . ".{$value->name}");
    }
}

