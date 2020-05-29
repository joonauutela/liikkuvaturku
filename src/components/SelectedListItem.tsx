import React from 'react';
import { RootState } from '../types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/locations-view.css';

const SelectedListItem: React.FC = () => {

    const selectLocations = (state: RootState) => state.selectedLocation;
    const selectedLocation = useSelector(selectLocations);

    return (
        <div className="selected-item-container">
            <h1>Valittu sijainti</h1>
            <div className="info-box">
                {selectedLocation === null || !selectedLocation
                    ?
                    <div>
                        <br />
                        <h3 style={{ color: "white" }}>Valitse sijainti kartalta tai listalta</h3>
                        <br />
                    </div>
                    :
                    <div>
                        <p className="info-item"><b>Osoite:</b> {selectedLocation.address}</p>
                        <p className="info-item"><b>Laitteet: </b>Ylätalja, punnerruslaite, dippitanko</p>
                        <Link to={`/locations/${selectedLocation.id}`}>
                            <p className="info-item">Katso kuvat täältä</p>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default SelectedListItem;