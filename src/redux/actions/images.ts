import { Image } from '../../types';
import { AppActions, SET_IMAGES } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import axios from 'axios';

export const setImageData = (images: Image[]): AppActions => ({
    type: SET_IMAGES,
    payload: {
        images
    }
});


export const setMachineImages = () => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Image[]>('http://localhost:3003/api/images/machines').then((response) => {
            dispatch(setImageData(response.data));
        });
    };
};


export const setLocationImagesById = (id: string) => {
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        axios.get<Image[]>(`http://localhost:3003/api/images/locations/${id}`).then((response) => {
            dispatch(setImageData(response.data));
        });
    };
};