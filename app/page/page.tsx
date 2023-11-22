'use client'
import { selectIsMenuOpen, useSelector } from "@/lib/redux";
import { getAllPages } from '@/app/api'
import { useEffect, useState } from "react";
import { PageListItemInterface } from "@/interfaces";

// export const metadata = { title: 'AEKR - View All Pages' };
export default function Page() {
    const isMenuOpen = useSelector(selectIsMenuOpen)
    const initialAllPages: Array<PageListItemInterface> = [];
    const [allPages, setAllPages] = useState(initialAllPages)

    useEffect(() => {
        const from = 0
        const count= 10
        const query = ''
        const sort = 'ASC'
        const orderBy = ''
        setAllPages(getAllPages({ from, count, query, sort, orderBy }))
    }, []);

    return (
        <div className='pt-28 main-page-container w-full'>
            <div className='m-4 bg-white shadow-md flex flex-col'>
                <div className='p-4 w-full flex flex-row justify-between items-center'>
                    <div>
                        <h1 className='title-big'>All Pages</h1>
                    </div>
                    <div>
                        <button className='bt-white-with-icon'>
                            <i><svg className="w-[15px] _gmxfZ2BpOHxa6nWwqBB kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                        </svg></i> Export</button>
                    </div>
                </div>
                <div className='p-4 w-full flex flex-row justify-between'>
                    <div>
                        <input type="text" className='' placeholder='Search Pages...'/>
                        <button className='bt-white-with-icon'>
                            <i><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-[15px] eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph _gmxfZ2BpOHxa6nWwqBB rZZ58B08lxezTX7iNgGT" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                            </svg></i>
                            Filter
                        </button>
                    </div>
                    <div>
                        <button className='bt-primary'>Add New Page</button>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <table className='w-full'>
                        <thead className='p-4 bg-gray-50 w-full'>
                            <tr className='font-normal text-gray-500 text-[13px] uppercase'>
                                <th className='pt-4 pb-4'>Page Id</th>
                                <th className='pt-4 pb-4'>Page Name</th>
                                <th className='pt-4 pb-4'>Page Url</th>
                                <th className='pt-4 pb-4'>Status</th>
                                <th className='pt-4 pb-4'>Created At</th>
                                <th className='pt-4 pb-4'>Updated At</th>
                                <th className='pt-4 pb-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='w-full p-4'>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>1</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                            <tr className='font-normal text-[14px]'>
                                <td className='pt-4 pb-4 text-center'>111</td>
                                <td className='pt-4 pb-4 text-center font-bold'>Home Page</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>https://www.test.com</a></td>
                                <td className='pt-4 pb-4 text-center'>Active</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'>22/08/2019</td>
                                <td className='pt-4 pb-4 text-center'><a href='#'>Edit</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className={`w-full pt-16 ${isMenuOpen ? 'md:pl-[300px]' : 'md:pl-[70px]'}`}>
            <div className='p-8'>
                <div className='card-default flex flex-col'>
                    <div className='p-8'>
                        <h1 className='title-default'>All Pages</h1>
                    </div>
                    <div className='p-8 flex flex-row justify-between items-center'>
                        <div>
                            <div className='relative'>
                                <svg
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[18px] h-[18px] absolute left-2 z-10 top-1/2 -translate-y-1/2"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M9.375 15.75C5.43997 15.75 2.25 12.56 2.25 8.625C2.25 4.68997 5.43997 1.5 9.375 1.5C13.31 1.5 16.5 4.68997 16.5 8.625C16.5 12.56 13.31 15.75 9.375 15.75Z"
                                        stroke="#AAA2A2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.5 16.5L3 15"
                                        stroke="#AAA2A2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <input type="text"
                                       placeholder='Search...'
                                       className='rounded-[5px] bg-[#f8f9fe] border border-[#dfdfdf] w-[334px] p-2 pl-7'
                                       onChange={(e) => {console.log(e)}}/>
                            </div>
                        </div>
                        <div>
test
                        </div>
                    </div>
                    <div className='w-full'>
                        <table className='w-full'>
                            <thead className='w-full p-8 bg-[#f8f9fe] border border-[#e3e3e3]'>
                                <tr className='uppercase text-xs text-left text-text-primary border-spacing-2.5'>
                                    <th className='pl-4 pt-2 pb-2 w-[3%]'></th>
                                    <th className='pl-2 pt-2 pb-2'>Name</th>
                                    <th className='pl-2 pt-2 pb-2'>Views</th>
                                    <th className='pl-2 pt-2 pb-2'>Url</th>
                                    <th className='pl-2 pt-2 pb-2'>Status</th>
                                    <th className='pl-2 pt-2 pb-2'>Created At</th>
                                    <th className='pl-2 pt-2 pb-2'>Updated At</th>
                                    <th className='pl-2 pt-2 pb-2 w-1/12'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allPages.map((pageItem) => {
                                        return (
                                            <tr key={pageItem.id}
                                                className='border-b border-solid border-light-gray'>
                                                <td className='pl-4 pt-2 pb-2'>
                                                    <input type='checkbox'
                                                           className='cursor-pointer'
                                                           onChange={(e) => { console.log(e)}}/>
                                                </td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-black'>{pageItem.name}</td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>{pageItem.views}</td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>{pageItem.url}</td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>
                                                    {
                                                        pageItem.status === 1 ?
                                                            <span className='text-default-green flex flex-row items-center'>
                                                                <svg
                                                                    width={11}
                                                                    height={11}
                                                                    viewBox="0 0 11 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                >
                                                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#05A03A" />
                                                                </svg>
                                                                <span className='ml-1'>Enabled</span>
                                                            </span>
                                                        :
                                                            <span className='text-default-red flex flex-row items-center'>
                                                                <svg
                                                                    width={11}
                                                                    height={11}
                                                                    viewBox="0 0 11 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                >
                                                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#FF0000" />
                                                                </svg>
                                                                <span className='ml-1'>Enabled</span>
                                                            </span>
                                                    }
                                                </td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>{pageItem.created_at.getDate()}</td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>{pageItem.updated_at.getDate()}</td>
                                                <td className='pl-2 pt-5 pb-5 text-sm text-text-primary'>
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 relative"
                                                        preserveAspectRatio="xMidYMid meet"
                                                    >
                                                        <path
                                                            d="M7.33337 1.33333H6.00004C2.66671 1.33333 1.33337 2.66666 1.33337 5.99999V9.99999C1.33337 13.3333 2.66671 14.6667 6.00004 14.6667H10C13.3334 14.6667 14.6667 13.3333 14.6667 9.99999V8.66666"
                                                            stroke="#AAA2A2"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M10.6933 2.01333L5.43992 7.26667C5.23992 7.46667 5.03992 7.86 4.99992 8.14667L4.71325 10.1533C4.60659 10.88 5.11992 11.3867 5.84659 11.2867L7.85325 11C8.13325 10.96 8.52659 10.76 8.73325 10.56L13.9866 5.30667C14.8933 4.4 15.3199 3.34667 13.9866 2.01333C12.6533 0.680001 11.5999 1.10667 10.6933 2.01333Z"
                                                            stroke="#AAA2A2"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M9.93994 2.76666C10.3866 4.36 11.6333 5.60666 13.2333 6.06"
                                                            stroke="#AAA2A2"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}