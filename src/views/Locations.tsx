import React from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Row, Col } from 'antd';

const Locations: React.FC = () => {

    return (
        <div className="content">


            <div className="map-container">
                <Map center={[51.505, -0.09]} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />

                </Map>
            </div>
            <Row>
                <Col span={12}>
                    <div className="list-container">
                        <h1>Ulkoliikuntapaikat</h1>
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
                <Col span={12}>
                    <div className="selected-item-container">
                        <h1>Valittu paikka</h1>
                        <p>Nimi</p>
                        <p>Nimi</p>
                        <p>Nimi</p>
                        <p>Nimi</p>
                    </div>
                </Col>
            </Row>

        </div>

    );
};

export default Locations;