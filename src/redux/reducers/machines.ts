import { Machine } from '../../types';
import { MachineActions, SET_MACHINES } from '../actionTypes';

const machineReducer = (state: Machine[] = [], action: MachineActions): Machine[] => {
    switch (action.type) {
        case SET_MACHINES:
            return [...state, ...action.payload.machines];
        default:
            return state;
    }
};

export { machineReducer };