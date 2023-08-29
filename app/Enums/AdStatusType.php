<?php 

namespace App\Enums;

use App\Traits\HasTranslatedLabels;

enum AdStatusType : int {
    use HasTranslatedLabels;

    case Rejected = -1;
    case AwaitingConfirmation = 0;
    case Confirmed = 1;
    case Expired = 2;
}