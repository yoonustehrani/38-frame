<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShopRequest;
use App\Http\Requests\UpdateShopRequest;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShopRequest $request)
    {
        $this->authorize('create', Shop::class);
        $details = collect($request->validated())->except(['iban', 'meta']);
        $shop = new Shop();
        $shop->fill($details->toArray());
        $shop->meta = $request->get('meta', []);
        try {
            \DB::beginTransaction();
            $request->user()->shop()->save($shop);
            $request->user()->update(['iban' => $request->input('iban')]);
            \DB::commit();
        } catch (\Throwable $th) {
            \DB::rollback();
            throw $th;
        }
        return response()->json([
            'message' => __('models.shop.created', ['title' => $shop->title]),
            'data' => $shop->toArray()
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Shop $shop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShopRequest $request, Shop $shop)
    {
        $this->authorize('update', $shop);
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $file_hash = sha1_file($file->getRealPath(), false);
            $file_name = "$file_hash.{$file->guessExtension()}";
            $uploaded = Storage::exists("public/avatars/$file_name") || $file->storePubliclyAs('public/avatars', $file_name);
            $shop->avatar = $uploaded ? "public/avatars/$file_name" : $shop->avatar;
        }
        $shop->fill($request->except(['avatar', 'meta']));
        $shop->meta = $request->get('meta', $shop->meta);
        $shop->save();
        return response()->json([
            'message' => __('models.shop.updated'),
            'data' => $shop->toArray()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        //
    }
}
