

export const Counter = ({value, increaseCounter, decreaseCounter}) => 
{
    return(
        <div>
            <button onClick={increaseCounter}>+</button>
            {value}
            <button onClick={decreaseCounter}>-</button>
        </div>
    );
}