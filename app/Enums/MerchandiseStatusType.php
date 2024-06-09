<?php 

namespace App\Enums;

use App\Traits\HasTranslatedLabels;

enum MerchandiseStatusType : string {
    use HasTranslatedLabels;

    case Rejected = 'rejected';
    case AwaitingConfirmation = 'awaiting confirmation';
    case Verified = 'verified';
}