'use client'
import { useEffect, useState } from "react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import shortid from "shortid";
import { getAllPageTypes, getTypeById, mapPageTypes, updatePageById } from "@/app/api/page/type";
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

    const savePageType = () => {
        const data = {
            pageId: typeId,
            content: currentPageTypes
        }
        //todo check for id to define create or update
        updatePageById(data)
    };
    return (
        <div className='flex flex-col grow p-8 pt-28 h-full'>
            <div className='bg-white shadow-md flex flex-row items-center justify-between w-full p-4 mb-4'>
                <div>
                    <h3 className='title-big'>Page type</h3>
                </div>
                <div>
                    <button className="bt-sm-primary"
                        onClick={() => { savePageType() }}
                    >
                        Save</button>
                </div>
            </div>
            <div className='flex-grow grid grid-1 md:grid-cols-3 gap-7 h-full'>
                <div className='overflow-y-scroll bg-white shadow-xl w-full p-8 h-[90%]'>
                    <h3 className='title'>
                        Components Available
                    </h3>
                    <ul className='w-full'>
                        {
                            allowedPageTypes.map( type => {
                                return (
                                    <AllAllowedBox key={shortid.generate()} type={ type } />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='overflow-y-scroll col-span-1 md:col-span-2 h-[90%] bg-white shadow-xl w-full p-8'>
                    <h3 className='title'>Components In Use</h3>
                    <div className=''>
                        <ul>
                            {
                                currentPageTypes.map( currPageType => {
                                    return (
                                        <SelectedTypeBox
                                            key={shortid.generate()}
                                            currPageType={currPageType} />
                                    )
                                })
                            }
                            <li
                                className={`bg-gray-100 border-[3px] border-dashed border-purple-300 hover:border-secondary 
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

        </div>
    )
}