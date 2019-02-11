import React, { useState, useEffect } from "react";

const initialCount = 0;

export function useCount(initialCount, store) {
  return useState(initialCount);
}

export const increaseCount = setter => () => {
  setter(count => count + 1);
};

export const decreaseCount = setter => () => {
  setter(count => count - 1);
};

function CounterHook() {
  const [count, setCount] = useCount(initialCount);
  useEffect(() => {
    // componentDidMount
    console.log("--> componentDidMount");
    return () => {
      // component unmount
      console.log("component unmount");
    };
  }, [count]); // useEffect((), []) --> componentDidUpdate

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={increaseCount(setCount)}>+</button>
      <button onClick={decreaseCount(setCount)}>-</button>
    </div>
  );
}

export default CounterHook;
