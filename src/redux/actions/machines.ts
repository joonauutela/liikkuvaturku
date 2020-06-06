import { Machine } from '../../types';
import { AppActions, SET_MACHINES } from '../actionTypes';
import { Dispatch } from "redux";
import { AppState } from '../../store/configureStore';
import firebase from '../../firebase';

export const setMachineData = (machine: Machine): AppActions => ({
    type: SET_MACHINES,
    payload: {
        machine
    }
});

export const setMachines = () => {

    return (dispatch: Dispatch<AppActions>, _getState: () => AppState) => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const machineData = await db.collection('excercise_machines').get();

            machineData.forEach(machine => {
                const data = machine.data();
                const machineToAppend: Machine = {
                    id: data.machine_id,
                    name: data.name,
                    content: data.content,
                    repetitions: data.repetitions,
                    sets: data.sets,
                    image: data.image
                };
                dispatch(setMachineData(machineToAppend));
            });
        };
        fetchData();
    };
};