import { Location } from '../../types';
import { AppActions, SET_SELECTED_LOCATION } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';

export const setLocationData = (location: Location): AppActions => ({
    type: SET_SELECTED_LOCATION,
    payload: {
        location
    }
});

export const setLocation = (location: Location) => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        dispatch(setLocationData(location));
    };
};