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
            <div
                onClick={() => { toggleProfile() }}
                className='flex flex-row items-center cursor-pointer'>
                <Image className="w-[30px] h-[30px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                       width={15}
                       height={15}
                       src={ user.profilePicture }
                       alt={ user.name }
                />
                <p className="text-xs text-left text-text-primary pl-2">John Doe</p>
                <i>
                    <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 h-2 text-text-primary ml-2"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M6.28 2L4.10667 4.17333C3.85 4.43 3.43 4.43 3.17333 4.17333L1 2"
                            stroke="#84888C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </i>
            </div>
            <ul className={`absolute right-2 flex flex-col default-popup-bg md:w-auto
                    ${profileOpen ? 'block opacity-1000' : 'hidden opacity-0'} `}>
                <li className='p-4 flex flex-row items-center'><FaRegUser className='mr-5' /><span>Profile</span></li>
                <li className='p-4 flex flex-row items-center'><FaTools className='mr-5' /><span>Settings</span></li>
                <li className='p-4 flex flex-row items-center border-t border-solid border-gray-200 mt-2 pt-6'><FaPowerOff className='mr-5' /><span>Logout</span></li>
            </ul>
        </div>
    )
}