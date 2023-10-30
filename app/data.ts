import { MenuItem } from "@/lib/redux";
import { FaAlignLeft, FaTools, FaTasks, FaThLarge } from "react-icons/fa";

export const menuItems: MenuItem[] = [
    {
        name: 'Posts',
        icon: FaThLarge,
        order: 1,
        subMenuItems: [
            {
                name: 'All Posts',
                order: 1,
                url: '/posts/view'
            },
            {
                name: 'Add Post',
                order: 2,
                url: '/posts/add'
            }
        ]
    },
    {
        name: 'Pages',
        icon: FaAlignLeft,
        order: 1,
        subMenuItems: [
            {
                name: 'All Pages',
                order: 1,
                url: '/page/view'
            },
            {
                name: 'Add Pages',
                order: 2,
                url: '/page/add'
            }
        ]
    },
    {
        name: 'Categories',
        icon: FaTasks,
        order: 1,
        subMenuItems: [
            {
                name: 'All categories',
                order: 1,
                url: '/category/view'
            },
            {
                name: 'Add Category',
                order: 2,
                url: '/category/view'
            }
        ]
    },
    {
        name: 'Settings',
        icon: FaTools,
        order: 1,
        subMenuItems: [
            {
                name: 'General Settings',
                order: 1,
                url: 'settings/general'
            },
            {
                name: 'Theme Settings',
                order: 1,
                url: 'settings/theme'
            },
        ]
    }
]