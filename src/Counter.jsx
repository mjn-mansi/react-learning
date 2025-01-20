import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(1);
    const decCounter = () => counter > 0 ? setCounter(counter - 1) : ''
    const incCounter = () => counter < 20 ? setCounter(counter + 1) : ''

    return <>
        <div className="w-full h-screen flex flex-wrap justify-center items-center">
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={decCounter}>-</button>
            <h1 className="px-4">{counter}</h1>
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={incCounter}>+</button>
        </div>

    </>
}

export default Counter;