import React, { useState } from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Row, Col } from 'antd';
import axios from 'axios';
import { Location } from '../types';

const Locations: React.FC = () => {

    const [data, setData] = useState<Location[]>();

    React.useEffect(() => {
        const fetchLocationList = async () => {
            const { data: locationData } = await axios.get<Location[]>('http://localhost:3003/api/locations');
            setData(locationData);
        };
        fetchLocationList();
    }, []);

    if (!data) return null;

    return (
        <div className="content">
            {data[0].latitude}
            <div className="map-container">
                <Map center={[60.454510, 22.264824]} zoom={12}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {data.map(location =>
                        <Marker key={location.id} position={[location.latitude, location.longitude]}>
                            <Popup><b>Osoite:</b> {location.address}</Popup>
                        </Marker>
                    )}
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