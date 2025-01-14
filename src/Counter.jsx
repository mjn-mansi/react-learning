import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(1);
    const decCounter = () => counter > 0 ? setCounter(counter - 1) : ''
    const incCounter = () => counter < 20 ? setCounter(counter + 1) : ''

    return <>
        <button onClick={decCounter}>-</button>
        <h1>{counter}</h1>
        <button onClick={incCounter}>+</button>
    </>
}

export default Counter;