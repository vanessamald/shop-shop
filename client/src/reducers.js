import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type is UPDATE_PRODUCTS, return the new state with the products array updated
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
    };
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
                };

    // if it's none of these actions, do not update state at all and keep the old state
    default:
        return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  


