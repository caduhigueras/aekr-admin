"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { type MenuItem, type SubMenuItem } from "@/lib/redux";
import { FaThLarge, FaAlignLeft, FaTasks, FaTools} from "react-icons/fa";

export interface SidebarItemProps {
    item: MenuItem,
    isMenuOpen: boolean
}
export default function SidebarItem({ item, isMenuOpen }: SidebarItemProps) {

    const [ isOpen, setIsOpen ] = useState(false);

    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'FaThLarge':
                return <FaThLarge />
            case 'FaAlignLeft':
                return <FaAlignLeft />
            case 'FaTools':
                return <FaTools />
            default:
                return <FaTasks />
        }
    }

    const toggleSubItem = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li
            className={`flex flex-col w-full cursor-pointer text-white 
                    main-sidebar-item transition-all ease-in-out relative`}
            key={`item-${item.name}`}
            onClick={(el) => { toggleSubItem() }}
        >
            <span className={`w-full flex flex-row text-white p-4 hover:bg-secondary ${isMenuOpen ? 'justify-center md:justify-start' : 'justify-start md:justify-center '}`}>
                <i className={`menu - item - icon mr-4 ${isMenuOpen ? '' : 'mr-0'} `}>
                    { renderIcon(item.icon) }
                </i>
                <span className={`${isMenuOpen ? 'hidden md:block' : 'block md:hidden'}`}>
                    { item.name }
                </span>
            </span>
            <ul className={`bg-dark transition-all ease-in-out 
                    ${isOpen ? 'h-auto opacity-100 flex flex-col' : 'h-0 opacity-0 hidden' } 
                    ${isMenuOpen ? 'relative' : 'relative md:absolute left-0 md:left-full w-full md:w-[230px] border border-solid border-black md:border-l-4 md:border-l-secondary'}`}>
                {
                    item.subMenuItems.map( (submenuItem: SubMenuItem) => {
                        return (
                            <li className='hover:bg-dark2 p-4'
                                key={`sub-item'-${item.name}-${submenuItem.name}`}>
                                <Link
                                    className='pt-3 pb-3'
                                    href={submenuItem.url}>
                                    {submenuItem.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}