import { Machine } from '../../types';
import { AppActions, SET_MACHINES } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import axios from 'axios';

export const setLocationData = (machines: Machine[]): AppActions => ({
    type: SET_MACHINES,
    payload: {
        machines
    }
});

export const setMachines = () => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Machine[]>('http://localhost:3003/api/machines').then((response) => {
            dispatch(setLocationData(response.data));
        });
    };
};