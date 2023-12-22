<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUploadedFileRequest;
use App\Http\Requests\UpdateUploadedFileRequest;
use App\Http\Resources\UploadedFileResource;
use App\Models\UploadedFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

class UploadedFileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = intval($request->query('limit', '10'));
        $limit = $limit > 20 ? 20 : $limit;
        $files = UploadedFile::query();
        $files->whereType($request->query('type', 'image'));
        return UploadedFileResource::collection($files->limit($limit)->get());
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
    public function store(StoreUploadedFileRequest $request)
    {
        try {
            /**
             * @var \Illuminate\Http\UploadedFile|\Illuminate\Http\UploadedFile[] $photos
             */
            $photos = $request->file('files');
            $uploaded_files = collect([]);
            foreach ($photos as $photo) {
                $file_hash = sha1_file($photo->getRealPath(), false);
                $file_name = "$file_hash.{$photo->guessExtension()}";
                if (! Storage::exists("public/cms/$file_name") && $photo->storePubliclyAs('public/cms', $file_name)) {
                    $thumbnail = make_thumbnail("public/cms/$file_name", "public/cms/tn_$file_name");
                    $uploaded_files->push([
                        'name' => $photo->getClientOriginalName(),
                        'path' => "storage/cms/$file_name",
                        'extension' => $photo->guessExtension(),
                        'thumbnail_path' => $thumbnail ? "storage/cms/tn_$file_name.webp" : null,
                        'driver' => 'local',
                        'type' => 'image' // TODO: Add other types later
                    ]);
                }
            }
            try {
                \DB::beginTransaction();
                $saved_files = $uploaded_files->map(fn($f) => UploadedFile::create($f));
                \DB::commit();
                return UploadedFileResource::collection($saved_files);
            } catch (\Throwable $th) {
                \DB::rollback();
                return response()->json([
                    'message' => "Couldn't save files"
                ], 500);
            }
        } catch (\Throwable $th) {
            Storage::delete($uploaded_files->map(fn($file) => $file['path'])->toArray());
            return response()->json([
                'message' => "Couldn't upload files"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(UploadedFile $uploadedFile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UploadedFile $uploadedFile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUploadedFileRequest $request, UploadedFile $uploadedFile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UploadedFile $uploadedFile)
    {
        //
    }
}
