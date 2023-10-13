<?php 

namespace App\Enums;

use App\Traits\HasTranslatedLabels;

enum MerchandiseStatusType : int {
    use HasTranslatedLabels;

    case Rejected = -1;
    case AwaitingConfirmation = 0;
    case Published = 1;
}