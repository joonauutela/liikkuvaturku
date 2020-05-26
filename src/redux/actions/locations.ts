import { Location } from '../../types';
import { AppActions, SET_LOCATIONS } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import axios from 'axios';

export const setLocationData = (locations: Location[]): AppActions => ({
    type: SET_LOCATIONS,
    payload: {
        locations
    }
});

export const setLocations = () => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Location[]>('http://localhost:3003/api/locations').then((response) => {
            dispatch(setLocationData(response.data));
        });
    };
};