<?php 

namespace App\Enums;

use App\Traits\HasTranslatedLabels;

enum AdPricingType : string {
    use HasTranslatedLabels;
    // 'negotiation' | 'trade-off' | 'price'
    case Negotiation = 'negotiation';
    case TradeOff = 'trade-off';
    case Price = 'price';
}