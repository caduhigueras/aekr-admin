import Image from "next/image";
import { user } from "@/app/data";
import { FaPowerOff, FaRegUser, FaTools } from "react-icons/fa";

export default function Profile(
    {setNewMessagesOpen, profileOpen, setProfileOpen}:
    {setNewMessagesOpen: any, profileOpen: any, setProfileOpen: any}
) {
    const toggleProfile = () => {
        setNewMessagesOpen(false);
        setProfileOpen(!profileOpen);
    }

    return (
        <div className='relative cursor-pointer'>
            <Image className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                   onClick={() => { toggleProfile() }}
                   width={15}
                   height={15}
                   src={ user.profilePicture }
                   alt={ user.name }
            />
            <ul className={`absolute right-2 flex flex-col default-popup-bg md:w-auto
                    ${profileOpen ? 'block opacity-1000' : 'hidden opacity-0'} `}>
                <li className='p-4 flex flex-row items-center'><FaRegUser className='mr-5' /><span>Profile</span></li>
                <li className='p-4 flex flex-row items-center'><FaTools className='mr-5' /><span>Settings</span></li>
                <li className='p-4 flex flex-row items-center border-t border-solid border-gray-200 mt-2 pt-6'><FaPowerOff className='mr-5' /><span>Logout</span></li>
            </ul>
        </div>
    )
}