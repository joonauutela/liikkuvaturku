import { Location } from '../types';

export const ADD_LOCATION = "ADD_LOCATION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const SET_LOCATIONS = "SET_LOCATIONS";

export interface SetLocationsAction {
    type: typeof SET_LOCATIONS;
    payload: {
        locations: Location[];
    };
}

export type LocationActions = SetLocationsAction;

export type AppActions = LocationActions;