<li>
    <a href="#21212" class="flex items-center gap-2">
        @php icon($icon) @endphp
        <span class="text-gray-900 py-2 text-sm">
            {{ $slot }}
            @isset($subtitle)
                <span class="text-xs text-gray-700 block w-full mt-1">{{ $subtitle }}</span>
            @endisset
        </span>
    </a>
</li>