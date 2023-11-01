"use client"
import {
    useSelector,
    selectIsMenuOpen,
    selectMenuItems,
    menuSlice,
    useDispatch
} from "@/lib/redux";
import React, { useEffect } from "react";
import { menuItems } from "@/app/data";
import SidebarItem from "@/components/sidebar/sidebarItem";

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
        <aside className={`full-height bg-primary transition-all ease-in-out ? ${isMenuOpen ? 'md:w-[300px]' : 'md:w-[70px]'}`}>
            <ul className="menu pt-28 flex flex-col justify-evenly bg-primary">
                {
                    items ? items.map( item => {
                        return (<SidebarItem key={item.name} item={item} isMenuOpen={isMenuOpen} />)
                    }) : <></>
                }
            </ul>
        </aside>
    )
}