import React, { useEffect } from 'react';

const Navigation = () => {
    useEffect(() => {
        const nav = document.querySelector('nav')
        document.querySelector('#toggle').addEventListener('click', () => {
            nav.classList.toggle("nav-active")
            if(nav.classList.contains('hidden')){
                nav.classList.remove('hidden')
            } else {
                nav.classList.add('hidden')
            }
        })
    }, [])

    return(
        <header className="py-5 bg-gradient-to-br from-green-500 to-green-400 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-4xl ml-4 md:mr-0">Brand Logo</a>
                </div>
                <div className="md:hidden cursor-pointer mr-4 md:mr-0" id="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                </svg>
                </div>
                <nav className="hidden md:block">
                <ul className="text-2xl list-none flex flex-col md:flex-row sm:p-14 md:p-0">
                    <li className="ml-16 md:mt-0 mt-20">
                    <a href="#">Home</a>
                    </li>
                    <li className="ml-16 md:mt-0 mt-10">
                    <a href="#">About</a>
                    </li>
                    <li className="ml-16 md:mt-0 mt-10">
                    <a href="#">Blog</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation;