import { Location } from '../../types';
import { AppActions, SET_LOCATIONS } from '../actions';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import axios from 'axios';

export const receiveLocationData = (locations: Location[]): AppActions => ({
    type: SET_LOCATIONS,
    payload: {
        locations
    }
});

export const receiveLocations = () => {

    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Location[]>('http://localhost:3003/api/locations').then((data) => {
            dispatch(receiveLocationData(data.data));
        });
    };
};