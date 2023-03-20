
import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_FAILED, FETCH_COUNTRIES_SUCCESS } from "../actions/country";
import { Country } from "../../../types";
import { CountriesActions } from "../actions/country";
type CountriesState = {
    isLoading: boolean,
    error: null | string,
    items: Country[] 
}

const initialState: CountriesState = {
    isLoading: false,
    error: null,
    items: []
}

export function countriesReducer(state = initialState, action: CountriesActions) {
    switch (action.type) {
        case FETCH_COUNTRIES_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_COUNTRIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        }
        case FETCH_COUNTRIES_FAILED: {
            console.log("ERRORRRR")
            return {...state,}
        }
        default: 
            return state
    }
}