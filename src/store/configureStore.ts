import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { locationReducer } from '../redux/reducers/locations';
import { imageReducer } from '../redux/reducers/images';
import { mapReducer } from '../redux/reducers/map';
import { machineReducer } from '../redux/reducers/machines';

import { AppActions } from '../redux/actionTypes';

export const rootReducer = combineReducers({
    locations: locationReducer,
    images: imageReducer,
    map: mapReducer,
    machines: machineReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));