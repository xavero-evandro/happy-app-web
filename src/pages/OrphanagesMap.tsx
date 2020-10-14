import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import { Map, TileLayer } from "react-leaflet";

import '../styles/pages/orphanages-maps.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marker"/>
                    <h2>Choose an Orphanage </h2>
                    <p>Many children are waiting for your visit.</p>
                </header>
                <footer>
                    <strong>Berlin</strong>
                    <strong>Deutschland</strong>
                </footer>
            </aside>

            <Map
                center={[52.5162746,13.3755154]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap