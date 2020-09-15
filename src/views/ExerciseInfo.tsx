import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMachines } from '../redux/actions/machines';
import { RootState } from '../types';

import Accordion from '../components/Accordion/Accordion';

const ExerciseInfo: React.FC = () => {
    const selectMachines = (state: RootState) => state.machines;
    const machines = useSelector(selectMachines);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMachines());
    }, [dispatch]);

    return (
        <div className="content" style={{ background: 'rgba(255, 255, 255, 0.171)', width: '80%', margin: '1% 10%' }}>
            <h1 style={{ paddingTop: '2%' }}>Valitse laite</h1>
            {machines.map(machine =>
                <Accordion
                    key={machine.id}
                    name={machine.name}
                    content={machine.content}
                    reps={machine.repetitions}
                    sets={machine.sets}
                    image={machine.image}
                />
            )}
        </div>
    );
};

export default ExerciseInfo;