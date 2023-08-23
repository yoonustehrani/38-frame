<?php 

namespace App\Enums;

use App\Traits\HasTranslatedLabels;

enum AdDeliveryType : int {
    use HasTranslatedLabels;

    case InPerson = 1;
    case Shipment = 2;
    case Both = 3;
    
}