import { Menu } from "../menu/component.jsx"
import { Review } from "../review/component.jsx"


export const Restaurant = ({ name, menu, reviews }) => {
   return (
        <div>
            <h1>{name}</h1>
            <h3>Меню</h3>
                <ul>
                    {menu?.length ?  menu.map(({id,name,price,ingredients})=> <Menu key={id} name={name} price={price} ingredients={ingredients}/>) : <div>-</div>}
                </ul>
                
            <h3>Отзывы</h3>
                <ul>
                    {reviews?.length ?  reviews.map(({id,user,rating,text}) => <Review key={id} user = {user} rating = {rating} text={text}/>) : <div>-</div>}
                </ul>
            <hr></hr>
        </div>
   );
};