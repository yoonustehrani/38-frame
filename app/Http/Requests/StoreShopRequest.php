<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreShopRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->shop()->doesntExist();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'brand' => 'required|string|min:3|max:40',
            'founded_in_year' => 'required|integer|digits:4',
            'bio' => 'required|string|min:6|max:300',
            'address' => 'required_if:in_person_sale,yes|string|min:10|max:150',
            'category' => 'required|integer',
            'phone_number' => 'required|string|numeric|digits:11|regex:/09[0-9]{9}/',
            'address_line' => 'nullable|string|numeric',
            'meta.social.instagram' => 'nullable|string|min:4|max:60',
            'meta.social.telegram_channel' => 'nullable|string|min:4|max:60',
            'iban' => 'required|string|numeric|digits:24',
            'owner_fullname' => 'required|string|min:3|max:60',
            'owner_national_id' => 'required|string|numeric|digits:10',
            'website' => 'nullable|string|url',
            'accept_policy' => 'required|accepted'
        ];
    }
}
