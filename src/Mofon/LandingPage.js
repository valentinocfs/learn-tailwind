import React, { Fragment } from 'react';

// Image, Logo, & Icons
import imageHero from "../assets/img/image-hero.png";
import ImageOne from "../assets/img/image-1.png";
import ImageTwo from "../assets/img/image-2.png";
import logoBrand from "../assets/logo/logo-brand.svg";
import logoOne from "../assets/logo/logo-1.svg";
import logoTwo from "../assets/logo/logo-2.svg";
import logoThree from "../assets/logo/logo-3.svg";
import logoFour from "../assets/logo/logo-4.svg";
import logoFive from "../assets/logo/logo-5.svg";
import ArrowDown from "../assets/icons/down-arrow.svg";
import iconOne from "../assets/icons/icon-1.svg"
import iconTwo from "../assets/icons/icon-2.svg"
import iconThree from "../assets/icons/icon-3.svg"

const LandingPage = () => {
    return (
        <Fragment>
            <header className="pt-7 pb-2.5 fixed w-full z-10 top-0 bg-white">
                <nav className="max-w-screen-lg mx-auto flex justify-between items-center">
                    <img src={logoBrand} alt="Brand Name" className="cursor-pointer"/>
                    <ul className="flex text-gray">
                        <li className="mr-16 hover:text-darkBlue text-black"><a href="#" className="">Home</a></li>
                        <li className="mr-16 hover:text-darkBlue"><a href="#" className="">Features</a></li>
                        <li className="mr-16 hover:text-darkBlue"><a href="#" className="">Pricing</a></li>
                        <li className="hover:text-darkBlue"><a href="#" className="">Blog</a></li>
                    </ul>
                    <button className="bg-orange text-white px-20 py-5 rounded-lg">Get Started</button>
                </nav>       
            </header>
            <main className="max-w-screen-lg mx-auto">
                <section className="pt-44 grid grid-cols-2 gap-8">
                    <div className="py-10">
                        <h1 className="text-7xl text-black font-bold">Grow your subcription business</h1>
                        <p className="text-gray my-14 text-lg">Outcome-centered products that reduce churn, <br/> optimize pricing, and grow your subscription <br/>business end-to-end.</p>
                        <button className="bg-blue px-20 py-5 rounded-lg text-white hover:bg-kiciw">Get Started</button>
                        <img src={ArrowDown} alt="" className="inline-block ml-8 cursor-pointer"/>
                    </div>
                    <img src={imageHero} alt="" className="" />
                    
                </section>
                <section className="py-40 flex justify-between">
                    <img src={logoOne} alt=""/>
                    <img src={logoTwo} alt=""/>
                    <img src={logoThree} alt=""/>
                    <img src={logoFour} alt=""/>
                    <img src={logoFive} alt=""/>
                </section>
                <section className="grid grid-cols-2 gap-8 items-center mb-20">
                    <img src={ImageOne} alt="" />
                    <div className="">
                        <p className="text-black font-semibold text-5xl">Subscription index</p>
                        <p className="text-gray my-7">A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                        <button className="text-blue">Learn More</button>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-8 items-center justify-items-end mb-32">
                    <div className="">
                        <p className="text-black font-semibold text-5xl">In-depth metrics</p>
                        <p className="text-gray my-7">Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
                        <button className="text-blue">Learn More</button>
                    </div>
                    <img src={ImageTwo} alt="" className="" />
                </section>
                <section className="grid grid-cols-3 gap-16 mb-40">
                    <div className="text-center">
                        <img src={iconOne} alt="" className="mx-auto" />
                        <p className="font-semibold text-2xl text-black my-4">Benchmarks</p>
                        <p className="text-gray">See how you stack up against comparable companies in similar stages.</p>
                    </div>
                    <div className="text-center">
                        <img src={iconTwo} alt="" className="mx-auto" />
                        <p className="font-semibold text-2xl text-black my-4">Pricing Audit</p>
                        <p className="text-gray">Benchmark the health of your monetization and pricing strategy.</p>
                    </div>
                    <div className="text-center">
                        <img src={iconThree} alt="" className="mx-auto" />
                        <p className="font-semibold text-2xl text-black my-4">Retention Audit</p>
                        <p className="text-gray">Audit where revenue leakage exists and where you can increase retention.</p>
                    </div>
                </section>
                <section className="flex justify-between items-center mb-20">
                    <h2 className="text-6xl text-black">Get the right plan <br/>for future product</h2>
                    <div>
                        <button className="rounded-tl-lg rounded-bl-lg bg-blue px-12 py-6 text-white">Yearly</button>
                        <button className="rounded-tr-lg rounded-br-lg bg-grayThin px-12 py-6 text-black">Monthly</button>
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-8 mb-96">
                    <div className="rounded-lg text-center py-12 bg-grayThin text-gray text-base">
                        <p className="font-semibold text-md">Starter</p>
                        <h3 className="py-7 text-darkBlue text-6xl">Free</h3>
                        <div>
                            <p>1 Website</p>
                            <p className="my-4">5 GB Hosting</p>
                            <p>Limited Support</p>
                        </div>
                        <button className="rounded-md bg-blue py-5 px-20 mt-8 text-white">Get Started</button>
                    </div>
                    <div className="rounded-lg text-center py-16 bg-orange text-white text-base transform scale-105">
                        <p className="font-semibold text-md">Premium</p>
                        <h3 className="py-7 text-white text-6xl">$29<span className="text-2xl">/month</span></h3>
                        <div>
                            <p>10 Website</p>
                            <p className="my-4">15 GB Hosting</p>
                            <p>Premium Support</p>
                        </div>
                        <button className="rounded-md bg-grayThin text-blue py-5 px-20 mt-8">Get Started</button>
                    </div>
                    <div className="rounded-lg text-center py-12 bg-grayThin text-gray text-base">
                        <p className="font-semibold text-md">Starter</p>
                        <h3 className="py-7 text-darkBlue text-6xl">$49<span className="text-2xl">/month</span></h3>
                        <div>
                            <p>Unlimited Website</p>
                            <p className="my-4">50 GB Hosting</p>
                            <p>Premium Support</p>
                        </div>
                        <button className="rounded-md bg-blue py-5 px-20 mt-8 text-white">Get Started</button>
                    </div>
                </section>
            </main>
            <footer className="w-full bg-grayThin">
                <div className="max-w-screen-lg mx-auto flex justify-between py-20">
                    <div className="">
                        <img src={logoBrand} alt="" className="" />
                    </div>
                    <div>   
                        <p className="font-semibold text-lg mb-4 mt-2">Page</p>
                        <ul className="text-gray">
                            <li className="hover:text-blue mb-2"><a href="#">Home</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Pricing</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Features</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-lg mb-4 mt-2">Services</p>
                        <ul className="text-gray">
                            <li className="hover:text-blue mb-2"><a href="#">Get started</a></li>
                        </ul>
                    </div>
                    <div>   
                        <p className="font-semibold text-lg mb-4 mt-2">Contact</p>
                        <ul className="text-gray">
                            <li className="hover:text-blue mb-2"><a href="#">Twitter</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Youtube</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Medium</a></li>
                            <li className="hover:text-blue mb-2"><a href="#">Github</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray py-10">
                    <p>&copy;Copyright 2021 Design by Flew from Figma Comunity</p>
                </div>
            </footer>
        </Fragment>
    )
}

export default LandingPage;