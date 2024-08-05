import { CounterContainer } from "../counter/container";

export const Menu=({name, price, ingredients})=>{
    return (
    <div>
        <li>
            {name}
            <br/>Цена: {price}
            <br/>Ингридиенты:
            <ul>
                {ingredients?.length ? ingredients.map((value) =><li key={value}>{value}</li>) : <div>-</div>}
            </ul>
            <CounterContainer></CounterContainer>
        </li>
    </div>
     );
 }