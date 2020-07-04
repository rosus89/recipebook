import {
    AUTH_USER,
    FETCH_USERDATA,
    SET_LOADED,
    ADD_RECIPE,
    DELETE_RECIPE,


} from "./actionTypes";

let initialState = {
    userData: {},
    recipes: [],
    recipe: {},
    isAuth: false,
    isLoading: true
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case AUTH_USER:
            return {
                ...state,
                isAuth: action.payload
            }

        case FETCH_USERDATA:
            return {
                ...state,
                userData: action.payload
            }

        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }

        case DELETE_RECIPE:
            let newRecipes = [...state.recipes];
            newRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: newRecipes
            }

        case SET_LOADED:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
};