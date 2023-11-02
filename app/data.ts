import { MenuItem } from "@/lib/redux";

export const menuItems: MenuItem[] = [
    {
        name: 'Posts',
        icon: 'FaThLarge',
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
        icon: 'FaAlignLeft',
        order: 1,
        subMenuItems: [
            {
                name: 'All Pages',
                order: 1,
                url: '/pages'
            },
            {
                name: 'Add Pages',
                order: 2,
                url: '/pages/add'
            },
            {
                name: 'Page Types',
                order: 3,
                url: '/pages/types'
            }
        ]
    },
    {
        name: 'Categories',
        icon: 'FaTasks',
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
        icon: 'FaTools',
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

export interface AdminUserInterface {
    name: string,
    password: string,
    email: string,
    profilePicture: string,
    authType: string
}

export const user: AdminUserInterface = {
    name: 'Kenny Powers',
    password: ':)',
    email: 'kennypowers@hbo.com',
    profilePicture: '/user-placeholder.jpg',
    authType: 'admin'
}

export const messages = [
    {
        id: 1,
        title: 'Hi! I have a question',
        message: 'How about if we could in one case set...',
        isRead: false,
        userName: 'John Doe',
        date: '27/02/95',
    },
    {
        id: 2,
        title: 'Hi! I have a question',
        message: 'How about if we could in one case set...',
        isRead: false,
        userName: 'John Doe',
        date: '27/02/95',
    },
    {
        id: 7,
        title: 'Hi! I have a question',
        message: 'How about if we could in one case set...',
        isRead: true,
        userName: 'John Doe',
        date: '27/02/95',
    },
    {
        id: 3,
        title: 'Hi! I have a question',
        message: 'How about if we could in one case set...',
        isRead: true,
        userName: 'John Doe',
        date: '27/02/95',
    },
    {
        id: 4,
        title: 'Hi! I have a question',
        message: 'How about if we could in one case set...',
        isRead: true,
        userName: 'John Doe',
        date: '27/02/95',
    },
]

export interface PageTypes {
    id: number,
    name: string,
    type: string,
    components: {}[],
}

export const pageTypes: PageTypes[] = [
    {
        id: 1,
        name: 'Default',
        type: 'default',
        components: [
            {
                type: 'text',
                name: 'Title',
                value: 'title',
                order: 1
            },
            {
                type: 'textarea',
                name: 'Title',
                value: 'meta_description',
                order: 2
            },
            {
                type: 'wysiwyg',
                name: 'Content',
                value: 'content',
                order: 2
            },
        ]
    },
    {
        id: 2,
        name: 'Home',
        type: 'home',
        components: [
            {
                type: 'text',
                name: 'Title',
                value: 'title',
                order: 1
            },
            {
                type: 'textarea',
                name: 'Title',
                value: 'meta_description',
                order: 2
            },
            {
                type: 'wysiwyg',
                name: 'Content',
                value: 'content',
                order: 2
            },
        ]
    },
]