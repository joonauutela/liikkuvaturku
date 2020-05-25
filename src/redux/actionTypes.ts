import { Location } from '../types';

// Actions types for all locations.
export const SET_LOCATIONS = "GET_LOCATIONS";

export interface SetLocationsAction {
    type: typeof SET_LOCATIONS;
    payload: {
        locations: Location[];
    };
}

export type LocationActions = SetLocationsAction;


// Action types for selected location.
export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION";


export interface SetSelectedLocationAction {
    type: typeof SET_SELECTED_LOCATION;
    payload: {
        location: Location;
    };
}

export type SelectedLocationActions = SetSelectedLocationAction;

// All actions
export type AppActions = LocationActions | SelectedLocationActions;