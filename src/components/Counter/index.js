import React, { useState, useEffect } from "react";
import { ButtonStyled } from "../../styles";

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
    console.log("--> componentDidMount");
    return () => {
      console.log("component unmount");
    };
  }, [count]); // useEffect((), []) --> componentDidUpdate

  return (
    <div>
      <span>Count: {count}</span>
      <ButtonStyled onClick={() => setCount(0)}>Reset</ButtonStyled>
      <ButtonStyled primary onClick={increaseCount(setCount)}>
        +
      </ButtonStyled>
      <ButtonStyled onClick={decreaseCount(setCount)}>-</ButtonStyled>
    </div>
  );
}

export default CounterHook;
