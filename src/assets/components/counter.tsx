
import React from "react";
import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex flex-col items-center w-full h-full">
        <p className="mb-10 font-bold ">Count: {count}</p>
        <div className="flex flex-row gap-5">
        <button onClick={() => {setCount(count+1)}}>Increment</button>
        <button onClick={() => {setCount(count-1)}}>Decrement</button>
        </div>
        </div>
    </>
  )
}

export default Counter;