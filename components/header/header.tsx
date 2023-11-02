"use client"
import Image from "next/image";
import {
    menuSlice,
    useSelector,
    useDispatch,
    selectIsMenuOpen,
} from "@/lib/redux";
import { FaBarsStaggered } from "react-icons/fa6";
import Search from "@/components/header/search";
import User from "@/components/header/user";

export default function Header() {
    const isMenuOpen = useSelector(selectIsMenuOpen)
    const dispatch = useDispatch();

    return (
        <header className={`fixed top-0 left-0 w-full z-10 md:z-999 flex shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]
                ${isMenuOpen ? 'flex-col md:flex-row' : '' }`}>
            <div className={`logo text-center md:text-left ${isMenuOpen ? 'w-full md:w-[300px]' : 'w-full md:w-[70px]'}`}>
                <Image
                    className={`m-auto`}
                    loading="eager"
                    src="/logo.png"
                    alt='logo'
                    width={50}
                    height={50}
                />
            </div>
            <div className="grow grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-row justify-between p-4">
                <div className="cursor-pointer w-1/5  md:w-1/6 flex items-center pl-4" onClick={() => {  dispatch(menuSlice.actions.toggle()) }}>
                    <FaBarsStaggered className="text-2xl" />
                </div>
                <div className='w-4/5 md:w-1/2'>
                    <Search />
                </div>
                <div className="w-full md:w-1/6 col-span-2 md:col-span-1">
                    <User />
                </div>
            </div>
        </header>
    )
}