import { useState } from "react";

export const useCounter = () => {

    // const max = 5;
    // const min = 0;

    const [counter,setCount] = useState(0);

    const increaseCounter = () => {
        setCount((prevState)=>prevState+1);
      }
    const decreaseCounter = () => {
        setCount((prevState)=>prevState-1);
    }
    return {counter,increaseCounter,decreaseCounter}
};
