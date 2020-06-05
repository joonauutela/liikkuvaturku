import { Location, Image, Map, Machine } from '../types';

// Actions types for all locations.
export const SET_LOCATIONS = "GET_LOCATIONS";

export interface SetLocationsAction {
    type: typeof SET_LOCATIONS;
    payload: {
        location: Location;
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

// Action types for image URLS.
export const SET_IMAGES = "SET_IMAGES";

export interface SetImageAction {
    type: typeof SET_IMAGES;
    payload: {
        images: Image[];
    };
}

export type ImageActions = SetImageAction;

// Action types for map parameters
export const SET_MAP = "SET_MAP";

export interface SetMapActions {
    type: typeof SET_MAP;
    payload: {
        map: Map;
    };
}

export type MapActions = SetMapActions;

// Action types for excercise machines
export const SET_MACHINES = "SET_MACHINE";

export interface SetMachineActions {
    type: typeof SET_MACHINES;
    payload: {
        machines: Machine[];
    };
}

export type MachineActions = SetMachineActions;

// All actions
export type AppActions = LocationActions | SelectedLocationActions | ImageActions | MapActions | MachineActions;