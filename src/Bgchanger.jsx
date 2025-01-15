import React, { useState } from 'react'
import "./index.css"

const Bgchanger = () => {
    const [color, setColor] = useState("olive");

    return (
        <div className='w-100 h-screen' style={{ backgroundColor: color }}>
            <div className='fixed flex flex-wrap gap-3 justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl'>
                    <button className='rounded-3xl px-5 py-2 bg-black text-white' onClick={() => setColor('black')}>Black</button>
                </div>

                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl'>
                    <button className='rounded-3xl px-5 py-2 bg-blue-700 text-white' onClick={() => setColor('blue')}>Blue</button>
                </div>

                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl'>
                    <button className='rounded-3xl px-5 py-2 bg-pink-700 text-white' onClick={() => setColor('pink')}>Pink</button>
                </div>
            </div>
        </div>
    )
}

export default Bgchanger