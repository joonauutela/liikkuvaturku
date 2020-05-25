import { Location } from '../../types';
import { SelectedLocationActions, SET_SELECTED_LOCATION } from '../actionTypes';

const selectedLocationReducer = (state: Location | null = null, action: SelectedLocationActions) => {
    switch (action.type) {
        case SET_SELECTED_LOCATION:
            return action.payload.location;
        default:
            return state;
    }
};

export { selectedLocationReducer };