"use client"
import { useState } from "react";
import Profile from './profile'
import Messages from "@/components/header/messages";

export default function User(
    { setProfileOpen, setNewMessagesOpen, profileOpen }:
    { setProfileOpen: any, setNewMessagesOpen: any, profileOpen: any }
) {

    return (
        <div className='flex flex-row justify-center md:justify-end end-0 w-full md:w-auto'>
            <Profile
                setNewMessagesOpen={ setNewMessagesOpen }
                profileOpen={ profileOpen }
                setProfileOpen={ setProfileOpen } />
        </div>
    )
}