"use client"
import {
    useSelector,
    selectIsMenuOpen,
    selectMenuItems,
    menuSlice,
    useDispatch
} from "@/lib/redux";
import React, { useEffect } from "react";
import Link from "next/link";
import { menuItems } from "@/app/data";


export default function Sidebar() {
    const dispatch = useDispatch();

    const getMenuItems = () => {
        return menuItems
    }
    const toggleSideBarItem = (e: any) => {
        const allItems = document.querySelectorAll('.main-sidebar-item');
        let close = false;
        if (!e.target.parentNode.classList.contains('active')) {
            close = true;
        }
        allItems.forEach((el) => {
            if (el.className.includes('active')) {
                el.className = el.className.replace('active', '');
            }
        });
        console.log(e.target.parentNode.classList);
        if (close) {
            e.target.parentNode.classList.add("active");
        }
    }

    const items = useSelector(selectMenuItems);
    const isMenuOpen = useSelector(selectIsMenuOpen);

    useEffect(() => {
        if (!items) {
            dispatch(menuSlice.actions.setMenuItems(getMenuItems()))
        }
    }, [items]);

    return (
        <aside className={`full-height bg-primary ? ${isMenuOpen ? 'md:w-[300px]' : 'md:w-[70px]'}`}>
            <ul className="menu pt-28 flex flex-col justify-evenly bg-primary">
                {
                    items ? items.map( item => {
                        return (
                            <li
                                className='flex flex-col w-full cursor-pointer text-white main-sidebar-item transition-all ease-in-out'
                                key={`item-${item.name}`}
                                onClick={(el) => { toggleSideBarItem(el) }}
                            >
                                <span className="w-full flex flex-row text-white hover:bg-secondary">
                                    <i className='menu-item-icon mr-4'>
                                        { React.createElement(item.icon) }
                                        { item.icon }
                                    </i>
                                    {
                                        isMenuOpen ? item.name : ''
                                    }
                                </span>
                                <ul className='bg-dark transition-all ease-in-out'>
                                    {
                                        item.subMenuItems.map( submenuItem => {
                                            return (
                                                <li className='hover:bg-dark2'
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
                    }) : <></>
                }
            </ul>
        </aside>
    )
}