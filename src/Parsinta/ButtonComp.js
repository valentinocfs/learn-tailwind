import React from 'react';

const defaultButton = "w-32 h-10 rounded focus:outline-none text-white";

const Primary = (props) => {
    return (
        <button className={`${defaultButton} ${props.className && props.className} bg-blue-600 hover:bg-blue-700 `}>
            {props.children}
        </button>
    )
}

const Danger = (props) => {
    return (
        <button className={`${defaultButton} ${props.className && props.className} bg-red-600 hover:bg-red-700`}>
            {props.children}
        </button>
    )
}

const Success = (props) => {
    return (
        <button className={`${defaultButton} bg-teal-600 hover:bg-teal-700`}>
            {props.children}
        </button>
    )
}

export { Primary, Danger, Success };