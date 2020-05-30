import { Map } from '../../types';
import { AppActions, SET_MAP } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';

export const setMapData = (map: Map): AppActions => ({
    type: SET_MAP,
    payload: {
        map
    }
});


export const setMapParams = (latitude: number, longitude: number, zoom: number) => {
    const newMapObject: Map = {
        latitude,
        longitude,
        zoom
    };
    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {

        dispatch(setMapData(newMapObject));
    };
};
