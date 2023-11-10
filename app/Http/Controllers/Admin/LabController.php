<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLabRequest;
use App\Http\Requests\UpdateLabRequest;
use App\Http\Resources\LabResourceForAdmin;
use App\Models\Lab;
use Illuminate\Http\Request;

class LabController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', Lab::class);
        return LabResourceForAdmin::collection(Lab::paginate(6));
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
            $lab->active = $request->input('active');
            $lab->verified_at =  now();
            if ($lab->save()) {
                $lab->services()->createMany($request->input('services'));
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
    public function show($id)
    {
        // 'services.category', 
        $lab = Lab::with(['category'])->whereId($id)->firstOrFail();
        return response()->json($lab);
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
