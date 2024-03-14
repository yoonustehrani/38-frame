<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMerchandiseRequest;
use App\Http\Requests\UpdateMerchandiseRequest;
use App\Models\Merchandise;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class MerchandiseApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shop = get_user_shop();
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
        $item->fill($request->except('meta'));
        $merchandise = $shop->merchandise()->save($item);
        return response()->json([
            'message' => __('models.merchandise.created'),
            'data' => $merchandise->toArray()
        ]);
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
