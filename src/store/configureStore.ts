import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { locationReducer } from '../redux/reducers/locations';
import { selectedLocationReducer } from '../redux/reducers/selectedLocation';
import { imageReducer } from '../redux/reducers/images';
import { mapReducer } from '../redux/reducers/map';

import { AppActions } from '../redux/actionTypes';

export const rootReducer = combineReducers({
    locations: locationReducer,
    selectedLocation: selectedLocationReducer,
    images: imageReducer,
    map: mapReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));