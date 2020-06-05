import { Map } from '../../types';
import { MapActions, SET_MAP } from '../actionTypes';

const initialMapState: Map = {
    latitude: 60.454510,
    longitude: 22.264824,
    zoom: 12
};

const mapReducer = (state: Map = initialMapState, action: MapActions): Map => {
    switch (action.type) {
        case SET_MAP:
            return action.payload.map;
        default:
            return state;
    }
};

export { mapReducer };