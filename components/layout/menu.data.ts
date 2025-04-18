import {
    CircleHelp,
    HandCoins,
    LayoutDashboard,
    ListOrdered,
    MessageSquareDot,
    Settings,
    ShoppingBasket,
    Users
} from "lucide-vue-next";
import type {Component} from "vue";

export interface IMenuItem {
    name: string
    url: string
    icon: Component
}

export const MENU_DATA: IMenuItem[] = [
    {
        name: 'Home',
        url: '/',
        icon: LayoutDashboard
    },
    {
        name: 'Products',
        url: '/products',
        icon: ShoppingBasket
    },
    {
        name: 'Payments',
        url: '/payments',
        icon: HandCoins
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: ListOrdered
    },
    {
        name: 'Customers',
        url: '/customers',
        icon: Users
    },
    {
        name: 'Feedback',
        url: '/feedback',
        icon: MessageSquareDot
    },
    {
        name: 'settings',
        url: '/settings',
        icon: Settings
    },
    {
        name: 'Help center',
        url: '/help',
        icon: CircleHelp
    },
]