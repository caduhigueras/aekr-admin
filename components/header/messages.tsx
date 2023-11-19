import { FaRegBell } from "react-icons/fa";
import { messages } from "@/app/data";

export default function Messages(
    { setProfileOpen, setNewMessagesOpen, newMessagesOpen }:
    { setProfileOpen: any, setNewMessagesOpen: any, newMessagesOpen: any }
) {
    //todo implement use State based on DB
    const hasNewMessages = () => {
        return true;
    }
    const toggleMessages = () => {
        setProfileOpen(false);
        setNewMessagesOpen(!newMessagesOpen);
    }

    return (
        <div className='relative cursor-pointer'>
            { hasNewMessages() ? <svg
                onClick={() => { toggleMessages() }}
                className='absolute'>
                    <circle cx="25.5" cy="4.5" r="3.5" fill="#FF0000"></circle>
            </svg>
                : null }

            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px] cursor-pointer"
                preserveAspectRatio="none"
            >
                <circle cx="15" cy="15" r="15" fill="#F1F6FD"></circle>
                <path
                    d="M12.3125 19.875H12C9.5 19.875 8.25 19.25 8.25 16.125V13C8.25 10.5 9.5 9.25 12 9.25H17C19.5 9.25 20.75 10.5 20.75 13V16.125C20.75 18.625 19.5 19.875 17 19.875H16.6875C16.4937 19.875 16.3062 19.9687 16.1875 20.125L15.25 21.375C14.8375 21.925 14.1625 21.925 13.75 21.375L12.8125 20.125C12.7125 19.9875 12.4813 19.875 12.3125 19.875Z"
                    stroke="#84888C"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.9978 14.875H17.0034"
                    stroke="#84888C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M14.4972 14.875H14.5028"
                    stroke="#84888C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M11.9966 14.875H12.0022"
                    stroke="#84888C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>


            <ul className={`absolute left-0 md:left-[30%] translate-x-0 md:translate-x-[-80%] default-popup-bg w-full md:w-[400px]
                        ${newMessagesOpen ? 'block opacity-1000' : 'hidden opacity-0'} 
                    `}>
                { messages.map( message => {
                    const isRead = message.isRead ? <div
                        className={`absolute bottom-auto left-auto 
                        right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 
                        skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs`}>
                    </div> : <></> ;
                    return (
                        <li className={`relative flex flex-row mb-3 pb-3 border-b
                                border-solid border-light hover:bg-slate-50 cursor-pointer`} key={message.id}>
                            {
                                !message.isRead ?
                                    <div
                                        className={`absolute bottom-auto left-auto 
                                        right-0 top-[-2px] z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 
                                        skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs`}>
                                    </div> : <></>
                            }
                            <div className='flex flex-row w-full justify-between'>
                                <div className='w-2/3 flex flex-col'>
                                    <span className='font-bold text-dark-gray w-full'>{ message.userName }</span>
                                    <span>{message.message}</span>
                                </div>
                                <div className='items-center justify-cente w-1/3r'>
                                    <span>{message.date}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}
                <button className='bg-white border-0 text-dark-gray hover:text-secondary w-full text-center pt-2'>
                    See All
                </button>
            </ul>
        </div>
    )
}