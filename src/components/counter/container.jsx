import { useCounter } from "../../hooks/useCounter";
import { Counter } from "../counter/component";

export const CounterContainer = () => {

    const {counter,increaseCounter,decreaseCounter} = useCounter();

    return <Counter value={counter} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}></Counter>
};
