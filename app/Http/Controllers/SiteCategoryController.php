<?php

namespace App\Http\Controllers;

use App\Models\SiteCategory;
use Illuminate\Http\Request;

class SiteCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = SiteCategory::whereType(
            $request->query('type') ?: ''
        );
        if ($request->query('parent_id')) {
            $query->whereParentId($request->query('parent_id'));
        } else {
            $query->whereNull('parent_id');
        }
        if ($request->query('children')) {
            $query->with('children');
        }
        return response()->json($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
