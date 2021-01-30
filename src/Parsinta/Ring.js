import React from 'react';

const Ring = () => {
    return(
        <div className="bg-white p-10 rounded-lg w-8/12 shadow-lg flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded text-white inline-flex focus:ring-4 ring-blue-300">Primary</button>
            <button className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded text-white inline-flex focus:ring-4 ring-green-300 ring-inset">Succes</button>
            <button className="bg-gray-500 hover:bg-gray-600 px-6 py-4 rounded text-white inline-flex focus:ring-4 ring-gray-300">Secondary</button>
            <button className="bg-red-500 hover:bg-red-600 px-6 py-4 rounded text-white inline-flex focus:ring-4 ring-red-300 ring-inset">Warning</button>
        </div>
    )
}

export default Ring;