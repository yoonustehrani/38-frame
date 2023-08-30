<?php

namespace App\Http\Requests;

use App\Enums\AdDeliveryType;
use App\Enums\AdPricingType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class StoreAdRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'ad' => [
                'title' => 'required|string|min:3|max:80',
                'description' => 'required|string|min:3',
                'delivery_type' => [
                    'required',
                    Rule::enum(AdDeliveryType::class)
                ],
                'pricing_type' => [
                    'required',
                    Rule::enum(AdPricingType::class)
                ],
                'price' => [
                    Rule::requiredIf($this->input('pricing_type') === AdPricingType::Price->value),
                    'numeric',
                    'min:0',
                    'max:' . ((string) 500_000_000)
                ],
                'address' => [
                    Rule::requiredIf($this->input('delivery_type') !== AdDeliveryType::Shipment->value),
                    'string',
                    'min:3',
                    'max:100'
                ],
                'phone_number' => 'required|string|numeric|digits:11|string|regex:/09[0-9]{9}/',
            ],
            'meta' => [
                'address_line' => 'nullable|string|numeric',
                'only_sms' => 'nullable'
            ],
            'photos.*' => [
                'required',
                File::types(['jpg', 'png', 'webp'])
                ->min('10kb')
                ->max('1mb')
                // TODO
                // ->dimensions(
                //     Rule::dimensions()->ratio()->minHeight()->minWidth()
                // )
            ],
        ];
    }
}
