import React, { useState } from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Row, Col } from 'antd';
import axios from 'axios';

const Locations: React.FC = () => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    React.useEffect(() => {
        const fetchPatientList = async () => {
            const country = await axios.get('https://restcountries.eu/rest/v2/name/sweden');
            console.log(country.data[0].latlng[0]);
            setLatitude(country.data[0].latlng[0]);
            setLongitude(country.data[0].latlng[1]);
        };
        fetchPatientList();
    }, []);

    return (
        <div className="content">
            <div className="map-container">
                <Map center={[latitude, longitude]} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>
            </div>
            <Row>
                <Col span={14}>
                    <div className="list-container">
                        <h1>Ulkoliikuntalaitteet</h1>
                        <ul className="list">
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>
                            <li className="list-item">Kupittaa</li>

                        </ul>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="selected-item-container">
                        <h1>Valittu sijainti</h1>
                        <div className="info-box">
                            <p className="info-item"><b>Osoite:</b> Lauklähteenkatu 13 Turku</p>
                            <p className="info-item"><b>Laitteet: </b>Ylätalja, punnerruslaite, dippitanko</p>
                            <p className="info-item">Katso kuvat täältä</p>

                        </div>
                    </div>
                </Col>
            </Row>

        </div>

    );
};

export default Locations;