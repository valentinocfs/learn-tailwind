import React, { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    return(
        <header className="bg-gradient-to-br from-red-500 to-rose-600">
            <div className="container mx-auto flex flex-col lg:flex-row lg:py-0.5">
                <div className="flex justify-between items-center text-rose-100 px-4 py-4">
                    <div className="">
                        <a href="#" className="font-semibold text-3xl">Kiciw</a>
                    </div>
                    <div className="block lg:hidden">
                        <button className="focus:outline-none" onClick={() => setIsActive(!isActive)} >
                            <svg className={`${isActive ? "hidden" : "block"} w-7 h-7`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            <svg className={`${isActive ? "block" : "hidden"} w-7 h-7`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isActive ? "block" : "hidden"} lg:flex flex-col lg:flex-row justify-between lg:items-center w-full text-rose-100 px-4 py-5 lg:py-0 lg:border-none border-t-2 border-rose-200`}>
                    <nav>
                        <ul className="flex flex-col lg:flex-row">
                            <li className="hover:text-rose-300"><a href="#" className="block lg:px-4 py-5">Home</a></li>
                            <li className="hover:text-rose-300" ><a href="#" className="block lg:px-4 py-5 hover:border-b-2 hover:border-white">About</a></li>
                            <li className="hover:text-rose-300"><a href="#" className="block lg:px-4 py-5 hover:border-b-2 hover:border-white">Blog</a></li>
                        </ul>
                    </nav>
                    <div className="">
                        <ul className="flex lg:flex-row">
                            <li className=""><a href="#" className="block mr-4 lg:px-4"><button className="focus:outline-none bg-rose-700 px-6 rounded-md hover:bg-rose-200 py-3 hover:text-rose-500">Sign in</button></a></li>
                            <li className=""><a href="#" className="block lg:ml-4"><button className="focus:outline-none bg-rose-700 px-6 rounded-md hover:bg-rose-200 py-3 hover:text-rose-500">Sign up</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;