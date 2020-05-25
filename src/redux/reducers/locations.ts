import { Location } from '../../types';
import { LocationActions, SET_LOCATIONS } from '../actionTypes';

const locationReducer = (state: Location[] = [], action: LocationActions): Location[] => {
    switch (action.type) {
        case SET_LOCATIONS:
            return [...state, ...action.payload.locations];
        default:
            return state;
    }
};

export { locationReducer };