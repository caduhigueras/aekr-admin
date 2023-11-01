"use client"
import React, { useState } from "react";
import Link from "next/link";
import { type MenuItem, type SubMenuItem } from "@/lib/redux";

export interface SidebarItemProps {
    item: MenuItem,
    isMenuOpen: boolean
}
export default function SidebarItem({item, isMenuOpen}: SidebarItemProps) {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleSubItem = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li
            className='flex flex-col w-full cursor-pointer text-white main-sidebar-item transition-all ease-in-out'
            key={`item-${item.name}`}
            onClick={(el) => { toggleSubItem() }}
        >
            <span className="w-full flex flex-row text-white p-4 hover:bg-secondary">
                <i className='menu-item-icon mr-4'>
                    { React.createElement(item.icon) }
                    { item.icon }
                </i>
                {
                    isMenuOpen ? item.name : ''
                }
            </span>
            <ul className={`bg-dark transition-all ease-in-out ${isOpen ? 'h-auto opacity-100 flex flex-col' : 'h-0 opacity-0 hidden' }`}>
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