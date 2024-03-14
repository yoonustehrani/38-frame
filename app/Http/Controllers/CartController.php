<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'message' => '',
            'data' => cart()->getCartItems()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        cart()->addToCart($request->input('productId'), $request->input('qunatity', 1));
        return response()->json([
            'message' => '',
            'data' => cart()->getCartItems()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $productId)
    {
        if ($request->input('qunatity') == 0) {
            cart()->removeFromCart($productId);
        } else {
            cart()->updateCartItemQuantity($productId, $request->input('qunatity'));
        }
        return response()->json([
            'message' => '',
            'data' => cart()->getCartItems()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $productId)
    {
        cart()->removeFromCart($productId);
        return response()->json([
            'message' => '',
            'data' => cart()->getCartItems()
        ]);
    }
}
