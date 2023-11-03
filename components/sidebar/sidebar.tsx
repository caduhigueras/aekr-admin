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

    const items = useSelector(selectMenuItems);
    const isMenuOpen = useSelector(selectIsMenuOpen);

    useEffect(() => {
        if (!items) {
            dispatch(menuSlice.actions.setMenuItems(getMenuItems()))
        }
    }, [items]);

    return (
        <aside className={`full-height relative bg-primary transition-all ease-in-out shadow-[0_5px_20px_0_rgba(0,0,0,0.1) ? ${isMenuOpen ? 'hidden md:block md:w-[300px]' : 'z-99 md:-z-1 w-full fixed md:w-[70px]'}`}>
            <button
                className="block md:hidden absolute top-1 right-1 cursor-pointer text-white"
                onClick={() => {  dispatch(menuSlice.actions.toggle()) }}
            >
                    close
            </button>
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