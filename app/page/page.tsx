'use client'
// export const metadata = { title: 'AEKR - View All Pages' };
export default function Page() {
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
    )
}