import { GET_INVESTORS, GET_INVESTOR_ID, GET_INTERACTION_STATUSES, GET_INVESTOR_TYPES, ADD_INVESTOR } from "../actions/types.js";

const initialState = {
    investors: [],
    current_investor: [],
    interaction_statuses: [],
    types_of_investor: []
};

export default function (state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case GET_INVESTORS:
            return {
                ...state,
                investors: action.payload
            }
        case GET_INVESTOR_ID:
            return {
                current_investor: action.payload
            }
        case GET_INTERACTION_STATUSES:
            return {
                ...state,
                interaction_statuses: action.payload
            }
        case GET_INVESTOR_TYPES:
            return {
                ...state,
                types_of_investor: action.payload
            }
        case ADD_INVESTOR:
            return {
                ...state,
                investors: [...state.investors, action.payload]
            }
        default:
            return state;
    }
}