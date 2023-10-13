<?php

namespace App\Http\Controllers;

use App\Models\LabService;
use App\Models\SiteCategory;
use Illuminate\Http\Request;

class LabServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->wantsJson()) {
            return SiteCategory::whereType('service')->with('services')->select('id', 'label')->get();
        }
        abort(404);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(LabService $labService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LabService $labService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LabService $labService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LabService $labService)
    {
        //
    }
}
