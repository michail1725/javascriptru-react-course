export const Review = ({user,rating,text})=> {
    return (
        <li>
            {user} - {rating}
            <br/>{text}
        </li>
    );
 }