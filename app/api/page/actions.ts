import { PageListItemInterface } from '@/interfaces'

type getAllPagesProps = {
    from: number,
    count: number,
    query: string,
    orderBy: string,
    sort: string
}
export const getAllPages = ({from, count, query, orderBy, sort}: getAllPagesProps): PageListItemInterface[] => {
    return [
        {
            id: 1,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 2,
            name: 'Test Page 1',
            views: 998,
            url: 'https://url.com',
            status: 2,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 3,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 2,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 4,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 5,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 6,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 7,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 8,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 9,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },{
            id: 10,
            name: 'Home Page',
            views: 999,
            url: 'https://url.com',
            status: 1,
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]
}