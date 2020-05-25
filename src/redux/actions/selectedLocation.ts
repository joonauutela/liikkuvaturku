import { Location } from '../../types';
import { AppActions, SET_SELECTED_LOCATION } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import axios from 'axios';

export const selectLocationData = (location: Location): AppActions => ({
    type: SET_SELECTED_LOCATION,
    payload: {
        location
    }
});

export const selectLocation = (id: string) => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Location[]>(`http://localhost:3003/api/locations/${id}`).then((response) => {
            dispatch(selectLocationData(response.data[0]));
        });
    };
};