<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLabRequest;
use App\Http\Requests\UpdateLabRequest;
use App\Http\Resources\LabCollection;
use App\Http\Resources\LabResource;
use App\Models\Lab;
use App\Models\SiteCategory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class LabController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Lab::with(['city.province', 'category']);
        if ($request->get('brand') != null) {
            $query->where('brand', 'like', "%{$request->query('brand')}%");
        }
        if ($request->has('onlyActive')) {
            $query->where('active', $request->has('onlyActive'));
        }
        if ($request->has('category')) {
            $query->where('category_id', $request->query('category'));
        }
        if ($request->has('city')) {
            $query->where('city_id', $request->query('city'));
        }
        if ($request->has('services')) {
            $services = $request->query('services');
            if (gettype($services) == 'array') {
                $query->whereHas('services', function($query) use($services) {
                    $query->whereIn('lab_service.service_id', $services)
                        ->groupBy('lab_id')
                        ->havingRaw('COUNT(distinct `lab_service`.`service_id`) = ' . count($services));
                });
            }
        }
        return LabResource::collection($query->paginate(8)->withQueryString());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLabRequest $request)
    {
        try {
            \DB::beginTransaction();
            $lab = new Lab();
            $lab->fill($request->all());
            $lab->slug = str_replace(' ', '-', $request->input('brand'));
            $lab->active = true;
            $lab->verified_at = null;
            if ($lab->save()) {
                $lab->services()->sync($request->input('services'));
            }
            \DB::commit();
            return response()->json([
                'okay' => true,
                'data' => $lab->toArray()
            ]);
        } catch (\Throwable $th) {
            \DB::rollback();
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($lab_slug)
    {
        $lab = Lab::whereSlug($lab_slug)->with(['services.category.parent', 'category'])->firstOrFail();
        return view('pages.labs.show', compact('lab'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLabRequest $request, Lab $lab)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lab $lab)
    {
        //
    }
}
