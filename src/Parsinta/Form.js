import React from 'react';
import * as ButtonComp from "./ButtonComp"

const input = "focus:outline-none border focus:border-blue-500 px-2 py-2 focus:ring focus:ring-blue-300 rounded-md my-3"

const Form = () => {
    return(
        <div className="rounded-lg shadow-lg p-10 w-11/12 md:w-6/12">
            <p className="text-2xl font-semibold">Daftar</p>
            <hr className="my-4" />
            <div className="">
                <form className="text-gray-600">
                    <label htmlFor="username">Username</label>
                    <input tabIndex="1" type="text" name="username" id="username" className={`${input} w-full`} />
                    <label htmlFor="email">Email</label>
                    <input tabIndex="2" type="text" name="email" id="email" className={`${input} w-full`} />
                    <label htmlFor="password">Password</label>
                    <input tabIndex="3" type="password" name="password" id="password" className={`${input} w-full`} />
                    <div className="flex justify-between">
                        <div>
                            <label htmlFor="gender" className="mr-3">Gender</label>
                            <select className={`${input}`}>
                                <option>male</option>
                                <option>female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="mr-3">Date</label>
                            <input type="date" name="data" id="date" className={`${input}`} />
                        </div>
                    </div>
                </form>
                <ButtonComp.Primary tabIndex="4" className="my-4 block">
                    Daftar
                </ButtonComp.Primary>
                <small>Have an account? Here</small>
            </div>
        </div>
    )
}
export default Form;