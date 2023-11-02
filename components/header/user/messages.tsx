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
        <div className='mr-8 relative'>
            {/* todo move to mew component */}
            { hasNewMessages() ?
                <div
                    className={`absolute bottom-auto left-auto 
                        right-0 top-1 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 
                        skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs`}>
                </div> : null }

            <button
                className='pt-2'
                onClick={() => { toggleMessages() }}>
                <FaRegBell className='text-xl text-gray-500' />
            </button>

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