import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(1);
    const decCounter = () => setCounter(counter - 1)
    const incCounter = () => setCounter(counter + 1)

    return <>
        <button onClick={decCounter}>-</button>
        <h1>{counter}</h1>
        <button onClick={incCounter}>-</button>
    </>
}

export default Counter;