import { Location } from '../types';

// Actions types for all locations.
export const GET_LOCATIONS = "GET_LOCATIONS";

export interface GetLocationsAction {
    type: typeof GET_LOCATIONS;
    payload: {
        locations: Location[];
    };
}

export type LocationActions = GetLocationsAction;


// Action types for selected location.
export const GET_SIGNLE_LOCATION = "GET_SINGLE_LOCATION";
export const SET_SIGNLE_LOCATION = "SET_SINGLE_LOCATION";

export interface GetLocationsAction {
    type: typeof GET_LOCATIONS;
    payload: {
        locations: Location[];
    };
}

export interface GetLocationsAction {
    type: typeof GET_LOCATIONS;
    payload: {
        locations: Location[];
    };
}

export type AppActions = LocationActions;