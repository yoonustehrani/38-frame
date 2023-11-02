<?php

namespace App\Http\Requests;

use App\Models\Lab;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreLabRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create', Lab::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if ($this->user()->isAdmin()) {
            return [
                'brand' => 'required|string|min:3|max:40',
                'active' => 'required|boolean',
                'founded_in_year' => 'required|integer|digits:4',
                'bio' => 'required|string|min:6|max:300',
                'address' => 'required_if:in_person_sale,yes|string|min:10|max:150',
                'category_id' => 'required|integer',
                'phone_number' => 'required|string|numeric|digits:11|regex:/09[0-9]{9}/',
                'address_line' => 'nullable|string|numeric',
                'meta.social.instagram' => 'nullable|string|min:4|max:60',
                'meta.social.telegram_channel' => 'nullable|string|min:4|max:60',
                'owner_fullname' => 'required|string|min:3|max:60',
                'website' => 'nullable|string|url',
                'meta.workingDays' => 'required', // TODO
                'meta.onlySms' => 'nullable',
                'services.*.service_id' => 'required|integer',
                'services.*.description' => 'required|string|min:3|max:200',
                'services.*.price' => 'nullable|integer|min:1000',
                'services.*.price_note' => 'nullable|string|min:1|max:50',
            ];
        }
        return [
            'brand' => 'required|string|min:3|max:40',
            'active' => 'nullable',
            'founded_in_year' => 'required|integer|digits:4',
            'bio' => 'required|string|min:6|max:300',
            'address' => 'required_if:in_person_sale,yes|string|min:10|max:150',
            'category_id' => 'required|integer',
            'phone_number' => 'required|string|numeric|digits:11|regex:/09[0-9]{9}/',
            'address_line' => 'nullable|string|numeric',
            'meta.social.instagram' => 'nullable|string|min:4|max:60',
            'meta.social.telegram_channel' => 'nullable|string|min:4|max:60',
            'iban' => 'required|string|numeric|digits:24',
            'owner_fullname' => 'required|string|min:3|max:60',
            'owner_national_id' => 'required|string|numeric|digits:10',
            'website' => 'nullable|string|url',
            'meta.workingDays' => 'required', // TODO
            'meta.onlySms' => 'nullable',
            'services.*.service_id' => 'required|integer',
            'services.*.description' => 'required|string|min:3|max:200',
            'services.*.price' => 'nullable|integer|min:1000',
            'services.*.price_note' => 'nullable|string|min:1|max:50',
            'accpect_policy' => 'required|accepted'
        ];
    }
}
