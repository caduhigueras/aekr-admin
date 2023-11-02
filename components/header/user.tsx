"use client"
import { useState } from "react";
import Profile from './user/profile'
import Messages from "@/components/header/user/messages";

export default function User() {
    const [newMessagesOpen, setNewMessagesOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <div className='flex flex-row justify-center md:justify-end end-0 w-full md:w-auto'>
            <Messages
                newMessagesOpen={ newMessagesOpen }
                setProfileOpen={ setProfileOpen }
                setNewMessagesOpen={ setNewMessagesOpen } />
            <Profile
                setNewMessagesOpen={ setNewMessagesOpen }
                profileOpen={ profileOpen }
                setProfileOpen={ setProfileOpen } />
        </div>
    )
}