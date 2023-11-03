"use client"
import { pageTypes } from "@/app/data";
import Link from "next/link";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

export default function Page() {


    const deletePageType = (id: number) => {
        console.log(`delete ${id}`)
    }

    return (
        <div className='pt-28 main-page-container w-full'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Page Type</th>
                        <th scope="col" className="px-6 py-3">Components</th>
                        <th scope="col" className="px-6 py-3 text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        pageTypes.map( pageType => {
                            return (
                                <tr key={ pageType.id } className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <Link href={`/page/types/edit/${pageType.id}`}>{ pageType.name }</Link>
                                    </th>
                                    <td className="px-6 py-4">
                                        { pageType.components.length }
                                    </td>
                                    <td className="px-6 py-4 flex flex-row items-center justify-center">
                                        <Link href={`/page/types/edit/${pageType.id}`} className=''><FaRegEdit /></Link>
                                        <button onClick={ () => { deletePageType(pageType.id) }} className="font-medium text-blue-600 hover:underline"><FaRegTrashAlt /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}