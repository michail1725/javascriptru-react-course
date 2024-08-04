import { useState } from "react";

const useDishCounter = () => {

    const max = 5;
    const min = 0;

    const [counter,setCount] = useState(0);

    const increaseCounter = () => {
        setCount((prevState)=>prevState+1 > max ? prevState : prevState+1);
      }
    const decreaseCounter = () => {
        setCount((prevState)=>prevState-1 < min ? prevState : prevState-1);
      }
    return {counter,increaseCounter,decreaseCounter}
};

export const Menu=({name, price, ingredients})=>{

    const {counter,increaseCounter,decreaseCounter} = useDishCounter();

    return (
    <div>
        <li>
            {name}
            <br/>Цена: {price}
            <br/>Ингридиенты:
            <ul>
                {ingredients?.length ? ingredients.map((value) =><li key={value}>{value}</li>) : <div>-</div>}
            </ul>
        </li>
         <button onClick={increaseCounter}>+</button>
         {counter}
         <button onClick={decreaseCounter}>-</button>
    </div>
     );
 }