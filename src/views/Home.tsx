import React from 'react';
import '../App.css';
import Hero from '../components/Hero/Hero';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="content">
            <Hero />
            <div className="card">
                <h1 style={{ color: 'white' }}>Liikkumis ulkolaitteilla</h1>
                <p>Ympäri Turun kaupunkia sijaitsevat ulkokuntolaitteet ovat mainio tapa kasvattaa ja ylläpitää lihaskuntoa.
                liikkuvaturku.fi avulla löydät laitteiden sijainnit helposti kartalta laadukkailla kuvilla varustettuna.
                </p>
                <Link to={'/locations'}><Button ghost className="button">Etsi lähimmät ulkokuntoilulaitteet</Button></Link>
            </div>
        </div>
    );
};

export default Home;
