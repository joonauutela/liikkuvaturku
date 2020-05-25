import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { locationReducer } from '../redux/reducers/locations';
import { selectedLocationReducer } from '../redux/reducers/selectedLocation';
import { AppActions } from '../redux/actionTypes';

export const rootReducer = combineReducers({
    locations: locationReducer,
    selectedLocation: selectedLocationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));