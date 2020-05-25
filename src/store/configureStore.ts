import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { locationReducer } from '../redux/reducers/locations';
import { AppActions } from '../redux/actions';

export const rootReducer = combineReducers({
    locations: locationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));