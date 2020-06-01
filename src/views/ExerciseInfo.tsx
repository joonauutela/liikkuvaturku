import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import { useSelector } from 'react-redux';
import { RootState } from '../types';

const ExerciseInfo: React.FC = () => {

    const selectMachines = (state: RootState) => state.machines;
    const machines = useSelector(selectMachines);
    console.log(machines);

    return (
        <div className="content" style={{ background: "rgba(255, 255, 255, 0.171)", width: "80%", margin: "1% 10%" }}>
            <h1 style={{ paddingTop: "2%" }}>Valitse laite</h1>
            <Accordion />
            <Accordion />
        </div>
    );
};

export default ExerciseInfo;