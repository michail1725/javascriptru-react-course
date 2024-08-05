import { useReducer } from "react";

const defaultRating = 5;

const INITIAL_FORM = 
{
    name: "",
    review: "",
    rating: defaultRating
};

const minRating = 1;
const maxRating = 5;

function reducer(state, {type, payload })
{
    switch (type) 
    {
        case "setName": 
            return {...state, name: payload}
        case "setReview": 
            return {...state, review: payload}
        case "incrementRating": 
            return {...state, rating: Math.min(maxRating,state.rating + 1)}
        case "decrementRating": 
            return {...state, rating: Math.max(minRating,state.rating - 1)}
        case "save": 
            return INITIAL_FORM;
        default:
            return state;
    }
}

export const useReviewForm = () => 
{
    return useReducer(reducer, INITIAL_FORM);
};