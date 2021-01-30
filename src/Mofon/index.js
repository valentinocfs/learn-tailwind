import React, { Fragment } from 'react';

const Mofon = () => {
    const handleTheme = (e) => {
        if(e.target.name === "dark"){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }

    return (
        <Fragment>
            <header className="Header bg-kiciw dark:bg-gray-500 shadow-md fixed w-full">
                <div className="container mx-auto">
                    <div className="text-white px-5 py-5 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl hover:text-blue-500 cursor-pointer">Mofon</h2>
                        </div>
                        <div>
                            <ul className="flex text-light">
                                <li className="cursor-pointer hover:text-blue-500 mr-5">
                                    Home
                                </li>
                                <li className="cursor-pointer hover:text-blue-500 mr-5">
                                    About
                                </li>
                                <li className="cursor-pointer hover:text-blue-500 mr-5">
                                    Contact
                                </li>
                                <li className="cursor-pointer">
                                    <button className="mx-2" name="light" onClick={(e) => handleTheme(e)}>Light</button>
                                    <button className="mx-2" name="dark" onClick={(e) => handleTheme(e)}>Dark</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main className="Main">
                <section className="h-screen flex justify-center items-center bg-gray-100 dark:bg-poek">
                    <div className="shadow-s px-6 py-6 bg-kiciw dark:bg-gray-500 dark:text-light text-light rounded-md">
                        <h1>Frontend Developer</h1>
                    </div>
                </section>
                <section className="h-screen flex justify-center items-center bg-gray-100 dark:bg-poek">
                    <div className="shadow-s px-6 py-6 bg-kiciw dark:bg-gray-500 dark:text-light text-light rounded-md">
                        <h1>Android Developer</h1>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}


export default Mofon;