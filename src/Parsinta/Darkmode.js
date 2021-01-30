import React, { useEffect } from 'react';
 
const Darkmode = () => {
    const handleTheme = (value) => {
        localStorage.setItem('theme', value)
        const html = document.querySelector('html')
        if(value === 'dark'){
            html.classList.add('dark')
            html.classList.remove('light')
        } else {
            html.classList.add('light')
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }, [])

    return(
        <div className="w-6/12">
            <div className="bg-white dark:bg-gray-800 shadow px-8 py-4 flex justify-between items-center rounded-lg">
                <div><h1 className="text-xl text-gray-800 dark:text-gray-200">Darkmode</h1></div>
                <div className="">
                    <button onClick={() => handleTheme('light')} className="focus:outline-none w-4 h-4 rounded-full bg-gray-300"></button>
                    <button onClick={() => handleTheme('dark')} className="focus:outline-none w-4 h-4 rounded-full bg-gray-900 ml-3 mb-2"></button>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow p-8 rounded-t-lg mt-5">
                <h2 className="text-gray-700 dark:text-gray-300 text-3xl mb-5">Tailwind CSS</h2>
                <div>
                    <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis aperiam sapiente magni laborum illum recusandae sequi accusantium minus atque!</p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-700 shadow px-8 py-6 rounded-b-lg border-t dark:border-gray-700 border-gray-300">
                <p className=" text-gray-500 dark:text-gray-300 text-xs">- Lorem ipsum</p>
            </div>
        </div>
    )
} 

export default Darkmode;