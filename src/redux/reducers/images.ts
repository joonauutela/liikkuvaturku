import { Image } from '../../types';
import { ImageActions, SET_IMAGES } from '../actionTypes';

const imageReducer = (state: Image[] = [], action: ImageActions): Image[] => {
    switch (action.type) {
        case SET_IMAGES:
            console.log(action.payload.images);
            return [...action.payload.images];
        default:
            return state;
    }
};

export { imageReducer };