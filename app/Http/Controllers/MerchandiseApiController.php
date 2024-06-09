<?php

namespace App\Http\Controllers;

use App\Enums\MerchandiseStatusType;
use App\Http\Requests\StoreMerchandiseRequest;
use App\Http\Requests\UpdateMerchandiseRequest;
use App\Models\Merchandise;
use App\Models\Shop;
use App\Models\UploadedFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class MerchandiseApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Shop $shop)
    {
        $shop->load('merchandise');
        return response()->json($shop->merchandise);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMerchandiseRequest $request)
    {
        $shop = get_user_shop();
        $item = new Merchandise();
        try {
            DB::beginTransaction();
            $item->fill($request->except(['meta', 'images', 'avatar']));
            $item->status = MerchandiseStatusType::AwaitingConfirmation;
            $item->meta = [];
            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $file_hash = sha1_file($file->getRealPath(), false);
                $file_name = "$file_hash.{$file->guessExtension()}";
                $uploaded = Storage::exists("public/avatars/$file_name") || $file->storePubliclyAs('public/avatars', $file_name);
                $item->avatar()->associate($uploaded);
            }
            $merchandise = $shop->merchandise()->save($item);
            if ($request->hasFile('images')) {
                $files = collect($request->file('images'));
                $uploaded_photos = $files->map(function (\Illuminate\Http\UploadedFile $file) {
                    $file_hash = sha1_file($file->getRealPath(), false);
                    $file_name = "$file_hash.{$file->guessExtension()}";
                    $uploaded = Storage::exists("public/avatars/$file_name") || $file->storePubliclyAs('public/avatars', $file_name);
                    if ($uploaded) {
                        $uf = new UploadedFile([
                            'path' => "public/avatars/$file_name",
                            'mode' => 'user-uplaoded',
                            'uploaded_by' => auth()->id(),
                            'type' => 'image',
                            'extension' => $file->guessExtension(),
                            'name' => $file->getClientOriginalName(),
                        ]);
                        $uf->save();
                        return $uf->id;
                    }
                });
                
                $merchandise->images()->attach($uploaded_photos->toArray());
            }
            DB::commit();
            return response()->json([
                'message' => __('models.merchandise.created', ['title' => $merchandise->title]),
                'data' => $merchandise->toArray()
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();

            throw $th;
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Merchandise $merchandise)
    {
        $shop_id = get_user_shop_id();
        Gate::denyIf($merchandise->shop_id !== $shop_id);
        return response()->json($merchandise->toArray());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMerchandiseRequest $request, Merchandise $merchandise)
    {
        $shop_id = get_user_shop_id();
        Gate::denyIf($merchandise->shop_id !== $shop_id);
        $merchandise->fill($request->except('meta'));
        $merchandise->save();
        return response()->json([
            'message' => __('models.merchandise.updated'),
            'data' => $merchandise->toArray()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Merchandise $merchandise)
    {
        $shop_id = get_user_shop_id();
        Gate::denyIf($merchandise->shop_id !== $shop_id);
        $merchandise->delete();
    }
}
