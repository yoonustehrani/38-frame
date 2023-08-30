<?php

namespace App\Http\Controllers;

use App\Enums\AdStatusType;
use App\Http\Requests\StoreAdRequest;
use App\Models\Ad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdController extends Controller
{
    public User $user;
    public function __construct()
    {
        Auth::login(User::latest()->first());
        $this->user = auth()->user();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->user->ads()->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdRequest $request)
    {
        $ad = new Ad();
        $ad->fill($request->except(['photos', 'address_line']));
        $ad->city_id = $this->user->city_id;
        $ad->province = 17;
        $ad->status = (string) AdStatusType::AwaitingConfirmation->value;
        // Todo: add address_line to meta
        $this->user->ads()->save($ad);
        /**
         * @var \Illuminate\Http\UploadedFile|\Illuminate\Http\UploadedFile[] $photos
         */
        $photos = $request->file('photos');
        $uploaded_files = [];
        foreach ($photos as $photo) {
            $file_hash = sha1_file($photo->getRealPath(), false);
            $file_name = "$file_hash.{$photo->guessExtension()}";
            $uploaded = Storage::exists("public/ad-photos/$file_name") || $photo->storePubliclyAs('public/ad-photos', $file_name);
            $uploaded && array_push($uploaded_files, [
                'name' => $photo->getClientOriginalName(),
                'path' => "public/ad-photos/$file_name"
            ]);
        }
        return response()->json(compact('ad', 'uploaded_files'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ad)
    {
        return $ad;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ad $ad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ad)
    {
        //
    }
}
