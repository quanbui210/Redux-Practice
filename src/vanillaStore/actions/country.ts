import { Dispatch } from "redux"
import { Country } from "../../../types"

export const FETCH_COUNTRIES_REQUEST = "FETCH_COUNTRIES_REQUEST"
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS"
export const FETCH_COUNTRIES_FAILED = "FETCH_COUNTRIES_FAILED"

export function handleCountriesRequest() {
    return {
        type: FETCH_COUNTRIES_REQUEST
    } as const
}

export function handleCountriesSuccess(countries: Country[]) {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    } as const
}

export function handleCountriesFailed() {
    return {
        type: FETCH_COUNTRIES_FAILED
    } as const
}

export type CountriesActions = 
ReturnType<typeof handleCountriesSuccess> | 
ReturnType<typeof handleCountriesFailed> | 
ReturnType<typeof handleCountriesRequest>
//thunk
export function fetchCountries() {
    return async (dispatch: Dispatch) => {
        try {
            const req = await fetch('https://restcountries.com/v3.1/all')
            const countries: Country[] = await req.json()
            if (!req.ok) throw countries
            console.log(countries)
            dispatch(handleCountriesSuccess(countries))
        } catch (err) {
            dispatch(handleCountriesFailed())
        }
        
    }
}
