"use client"
import {
    menuSlice,
    useSelector,
    useDispatch,
    selectIsMenuOpen,
} from "@/lib/redux";
import { FaBarsStaggered } from "react-icons/fa6";
import Search from "@/components/header/search";
import User from "@/components/header/user";
import Messages from "@/components/header/messages";
import {useState} from "react";

export default function Header() {
    const isMenuOpen = useSelector(selectIsMenuOpen)
    const dispatch = useDispatch();
    const [newMessagesOpen, setNewMessagesOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 w-full z-10 md:z-999 flex shadow-[0_1px_2px_0_rgba(0,0,0,0.14)]
                ${isMenuOpen ? 'flex-col md:flex-row' : '' }`}>
            <div className={`w-full ${isMenuOpen ? 'md:pl-[300px]' : 'md:pl-[70px]'}`}>
                <div className="grow grid grid-cols-2 grid-rows-2 gap-4 md:flex md:flex-row justify-between p-4 bg-white">
                    <div className="cursor-pointer w-1/5  md:w-1/6 flex items-center pl-4" onClick={() => {  dispatch(menuSlice.actions.toggle()) }}>
                        <FaBarsStaggered className="text-2xl" />
                    </div>
                    <div className="w-full md:w-1/6 col-span-2 md:col-span-1 flex flex-row justify-end">
                        <div className='flex flex-row justify-between border-r border-light-gray pr-4 mr-4 w-1/3'>
                            <Search />
                            <Messages
                                newMessagesOpen={ newMessagesOpen }
                                setProfileOpen={ setProfileOpen }
                                setNewMessagesOpen={ setNewMessagesOpen } />
                        </div>

                        <User
                            setNewMessagesOpen={ setNewMessagesOpen }
                            setProfileOpen={ setProfileOpen }
                            profileOpen={ profileOpen }
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}