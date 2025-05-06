import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    isActive?: boolean;
}

export interface SharedData extends PageProps {
    auth: Auth;
    name: string;
    sidebarOpen: boolean;
    ziggy: Config & { location: string };
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    avatar?: string;
    created_at: string;
    updated_at: string;
}
