import { Location } from '../../types';
import { LocationActions, SET_LOCATIONS } from '../actions';

const locationReducer = (state: Location[] = [], action: LocationActions): Location[] => {
    switch (action.type) {
        case SET_LOCATIONS:
            console.log(action.payload.locations);
            return [...state, ...action.payload.locations];
        default:
            return state;
    }
};

export { locationReducer };