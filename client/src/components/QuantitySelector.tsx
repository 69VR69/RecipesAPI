import { useState } from "react";

export function QuantitySelector()
{
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{counter} personnes</span>
            <button onClick={increment}>+</button>
        </>
    );
}