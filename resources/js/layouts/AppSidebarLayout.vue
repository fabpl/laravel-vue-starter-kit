<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { BreadcrumbItem, SharedData } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

interface Props {
    breadcrumbs?: BreadcrumbItem[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const page = usePage<SharedData>();

const isOpen = computed(() => page.props.sidebarOpen);
</script>

<template>
    <SidebarProvider :default-open="isOpen">
        <AppSidebar />

        <SidebarInset>
            <AppSidebarHeader :breadcrumbs="breadcrumbs" />

            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>
