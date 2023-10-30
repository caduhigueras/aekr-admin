"use client"
import Image from "next/image";
import {
    menuSlice,
    useSelector,
    useDispatch,
    selectIsMenuOpen,
} from "@/lib/redux";
import { FaBarsStaggered } from "react-icons/fa6";


export default function Header() {
    const isMenuOpen = useSelector(selectIsMenuOpen)
    const dispatch = useDispatch();

    return (
        <header className={`fixed top-0 left-0 w-full z-10 flex shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]`}>
            <div className={`logo ${isMenuOpen ? 'md:w-[300px]' : 'md:w-[70px]'}`}>
                <Image
                    loading="eager"
                    src="/logo.png"
                    alt='logo'
                    width={50}
                    height={50}
                />
            </div>
            <div className="grow">
                <div className="nav-control" onClick={() => {  dispatch(menuSlice.actions.toggle()) }}>
                    <FaBarsStaggered />
                </div>
                <div className="end-0">
                </div>
            </div>
        </header>
    )
}