export function Buttons({setIsFiltersOpen, isFiltersOpen}: any) {
    const toggleFilterMenu = () => {
        console.log('clicked', isFiltersOpen);
        setIsFiltersOpen(!isFiltersOpen);
    }

    return (
        <div className='flex flex-row'>
            <div>
                <button
                    onClick={toggleFilterMenu}
                    className="w-28 h-7 rounded-[5px] bg-white border border-text-primary relative flex flex-row items-center">
                    <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-[13.83px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M9.54667 11.2091C9.54667 11.5605 9.27998 12.0214 8.93998 12.2L8 12.7243C7.12667 13.1909 5.91333 12.6667 5.91333 11.7333V8.65103C5.91333 8.24197 5.64667 7.7177 5.37333 7.42963L2.81331 5.10205C2.47331 4.80823 2.20667 4.28972 2.20667 3.93827V2.60165C2.20667 1.90453 2.81334 1.38025 3.55334 1.38025H12.4467C13.1867 1.38025 13.7933 1.90452 13.7933 2.54403V3.82304C13.7933 4.28971 13.4533 4.87161 13.12 5.15967"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.7133 9.73991C11.8915 9.73991 12.8466 8.91451 12.8466 7.8963C12.8466 6.8781 11.8915 6.05267 10.7133 6.05267C9.53509 6.05267 8.57996 6.8781 8.57996 7.8963C8.57996 8.91451 9.53509 9.73991 10.7133 9.73991Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.2466 10.0856L12.58 9.50946"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="w-[72.44px] h-[14.78px] text-xs text-left text-text-primary"> Filter </p>
                    <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-[10.89px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M9.96004 4.61618L6.70004 7.57433C6.31504 7.92368 5.68504 7.92368 5.30004 7.57433L2.04004 4.61618"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div>
                <div className="w-[114px] h-7">
                    <button className="w-[114px] h-7 rounded-[5px] bg-blue flex flex-row items-center pl-1">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M5 10H15"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 15V5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className='ml-1 mr-2 overflow-hidden h-[28px]'>
                            <svg
                                width={1}
                                height={28}
                                viewBox="0 0 1 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <line x1="0.5" y1="2.97928e-8" x2="0.499999" y2={28} stroke="#2448F1" />
                            </svg>
                            <svg
                                width={1}
                                height={28}
                                viewBox="0 0 1 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <line x1="0.5" y1="2.97928e-8" x2="0.499999" y2={28} stroke="#4D6BF7" />
                            </svg>
                        </div>
                        <p className="text-xs text-left text-white">Add Page</p>
                    </button>
                </div>
            </div>
        </div>
    )
}