<?php

namespace App\Services;

class RedisCartService
{
    public function __construct(
        public string|int $cartId
    )
    {
        
    }

    protected function getCartKey()
    {
        return "cart:{$this->cartId}";
    }

    public static function cart(int|string $cartId)
    {
        return new self($cartId);
    }

    public function addToCart($productId, $quantity)
    {
        \Redis::hset($this->getCartKey(), $productId, $quantity);
    }

    public function removeFromCart($productId)
    {
        \Redis::hdel($this->getCartKey(), $productId);
    }

    public function updateCartItemQuantity($productId, $quantity)
    {
        \Redis::hset($this->getCartKey(), $productId, $quantity);
    }

    public function getCartItems()
    {
        return \Redis::hgetall($this->getCartKey());
    }
}