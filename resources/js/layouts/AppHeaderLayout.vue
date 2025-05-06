<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import type { BreadcrumbItem } from '@/types';

interface Props {
    breadcrumbs?: BreadcrumbItem[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <div class="flex min-h-screen w-full flex-col">
        <AppHeader :breadcrumbs="breadcrumbs" />

        <main class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl">
            <slot />
        </main>
    </div>
</template>
