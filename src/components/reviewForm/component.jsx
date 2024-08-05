import { useReviewForm } from '../../hooks/useReviewForm.js'
import { Counter } from "../counter/component.jsx";


export const ReviewForm = () =>{

    const [form, dispatch] = useReviewForm();

    const {name, review, rating} = form;

    return (
        <div>
            <div>
                <span>Ваше имя</span>
                <input
                    value={name}
                    onChange={(event) => {dispatch({ type: "setName", payload: event.target.value})
                    }}>
                    </input>
            </div>
            <div>
                <span>Содержание отзыва</span>
                <input
                    value={review}
                    onChange={(event) => {dispatch({ type: "setReview", payload: event.target.value})
                    }}>
                    </input>
            </div>
            <div>
                <span>Рейтинг</span>
                <Counter value={rating} increaseCounter={() => dispatch({type: "incrementRating"})} decreaseCounter={() => dispatch({type: "decrementRating"})}></Counter>
            </div>
            <div>
                <button onClick={() => dispatch({type: "save"})}>Сохранить</button>
            </div>
        </div>
        
    );
    
}