<?php

namespace App\Policies;

use App\Models\Lab;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class LabPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Lab $lab): bool
    {
        return $user->isAdmin() || $lab->getKey() === $user->getKey();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->isAdmin() || $user->lab()->doesntExist();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Lab $lab): bool
    {
        return $user->isAdmin() || $lab->getKey() === $user->getKey();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Lab $lab): bool
    {
        return $user->isAdmin() || $lab->getKey() === $user->getKey();
    }
}
