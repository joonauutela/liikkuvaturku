import { Location } from '../../types';
import { AppActions, SET_LOCATIONS } from '../actionTypes';
import { Dispatch } from 'redux';
import { AppState } from '../../store/configureStore';
import firebase from '../../firebase';

export const setLocationData = (location: Location): AppActions => ({
    type: SET_LOCATIONS,
    payload: {
        location
    }
});

export const setLocations = () => {

    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const locationData = await db.collection('locations').get();

            locationData.forEach(location => {
                const data = location.data();
                const locationToAppend: Location = {
                    id: data.location_id,
                    name: data.name,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    address: data.address,
                    images: data.images
                };
                dispatch(setLocationData(locationToAppend));
            });
        };
        fetchData();
    };
};