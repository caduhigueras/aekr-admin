'use client'
import { useEffect, useState } from "react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { getAllPageTypes, getTypeById, mapPageTypes } from "@/app/api/page/type";
import { PageTypeInterface } from "@/interfaces";
import AllAllowedBox from "@/components/page/types/allAllowedBox";
import SelectedTypeBox from "@/components/page/types/selectedTypeBox";

export default function Layout() {
    const initialState: Array<PageTypeInterface> = [];
    const [allowedPageTypes, setAllowedPageTypes] = useState(initialState)
    const [currentPageTypes, setCurrentPageTypes] = useState(initialState)
    const [typeId, setTypeId] = useState(0)
    const pathName = usePathname();

    const extractId = (pathName: string) => {
       const pathArr = pathName.split('/');
       const idIndex = pathArr.indexOf('edit') + 1;
       return parseInt(pathArr[idIndex]);
    };

    const getTypesById = (typeId: number) => {
        setCurrentPageTypes(getTypeById(typeId))
    };

    useEffect(() => {
        const id = extractId(pathName);
        setTypeId(id);
        setAllowedPageTypes(getAllPageTypes());
        getTypesById(typeId)
    }, []);



    const addTypeToPage = (type: PageTypeInterface) => {
        setCurrentPageTypes([...currentPageTypes, type])
    };

    const drop = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault()

        const type: PageTypeInterface = {
            // @ts-ignore
            type: mapPageTypes(event.dataTransfer.getData('pagetype')),
            id: parseInt(event.dataTransfer.getData("id")),
            label: `${event.dataTransfer.getData("label")} (New)`,
            name: event.dataTransfer.getData("name"),
            instructions: event.dataTransfer.getData("instructions"),
            settings: JSON.parse(event.dataTransfer.getData("settings")),
            color: event.dataTransfer.getData("color"),
        }

         addTypeToPage(type)
        // console.log(type)
    }

    const checkAllowDrop = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault()
    };

    return (
        <div className='grid grid-1 md:grid-cols-3 gap-7 grow p-8 pt-28 h-full'>
            <div className='bg-white shadow-xl w-full p-8 h-full'>
                <h3 className='title'>
                    Components Available
                </h3>
                <ul className='w-full'>
                    {
                        allowedPageTypes.map( type => {
                            return (
                                <AllAllowedBox key={type.id} type={ type } />
                            )
                        })
                    }
                </ul>
            </div>
            <div className='col-span-1 md:col-span-2 h-full bg-white shadow-xl w-full p-8 overflow-y-scroll'>
                <h3 className='title'>Components In Use</h3>
                <div className=''>
                    <ul>
                        {
                            currentPageTypes.map( currPageType => {
                                return (
                                    <SelectedTypeBox key={currPageType.id} currPageType={currPageType} />
                                )
                            })
                        }
                        <li
                            className={`bg-light border-[7px] border-dashed border-purple-300 hover:border-secondary 
                            transition-all ease-in duration-150 text-center p-10`}
                            onDrop={(event) => {
                                drop(event)
                            }}
                            onDragOver={event => {
                                checkAllowDrop(event)
                            }}>
                            <span className='w-full uppercase text-xl text-secondary font-bold'>drop here</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}