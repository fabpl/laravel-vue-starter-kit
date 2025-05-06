<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavGroup, type NavItem, SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { House } from 'lucide-vue-next';
import { computed } from 'vue';
import AppLogo from './AppLogo.vue';

const page = usePage<SharedData>();

const isCurrentRoute = computed(() => (url: string) => page.url === url);

const mainNavItems: NavGroup[] = [
    {
        title: 'Menu',
        items: [
            {
                title: 'Home',
                href: '/',
                icon: House,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [];
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link href="/">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup v-for="group in mainNavItems" :key="group.title" class="px-2 py-0">
                <SidebarGroupLabel>{{ group.title }}</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem v-for="item in group.items" :key="item.title">
                        <SidebarMenuButton as-child :is-active="isCurrentRoute(item.href)" :tooltip="item.title">
                            <Link :href="item.href">
                                <component :is="item.icon" />
                                <span>{{ item.title }}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
            <SidebarGroup class="group-data-[collapsible=icon]:p-0">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in footerNavItems" :key="item.title">
                            <SidebarMenuButton
                                class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                                as-child
                            >
                                <Link :href="item.href">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarFooter>
    </Sidebar>

    <slot />
</template>
