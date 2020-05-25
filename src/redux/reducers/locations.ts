import { Location } from '../../types';
import { LocationActions, GET_LOCATIONS } from '../actionTypes';

const locationReducer = (state: Location[] = [], action: LocationActions): Location[] => {
    switch (action.type) {
        case GET_LOCATIONS:
            console.log(action.payload.locations);
            return [...state, ...action.payload.locations];
        default:
            return state;
    }
};

export { locationReducer };