export interface IMenuItem {
    name: string
    url: string
    icon: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        name: 'Home',
        url: '/',
        icon: 'lucide:layout-dashboard'
    },
    {
        name: 'Products',
        url: '/products',
        icon: 'lucide:shopping-basket'
    },
    {
        name: 'Payments',
        url: '/payments',
        icon: 'lucide-hand-coins'
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'lucide-list-ordered'
    },
    {
        name: 'Customers',
        url: '/customers',
        icon: 'lucide-users'
    },
    {
        name: 'Feedback',
        url: '/feedback',
        icon: 'lucide-message-square-dot'
    },
    {
        name: 'Settings',
        url: '/settings',
        icon: 'lucide-settings'
    },
    {
        name: 'Help center',
        url: '/help',
        icon: 'lucide-circle-help'
    },
]