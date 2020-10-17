import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup} from "react-leaflet";
import Leaflet from 'leaflet'
import '../styles/pages/orphanages-maps.css'
import 'leaflet/dist/leaflet.css'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

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
                zoom={14}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                    position={[52.5162746,13.3755154]}
                    icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                        UNICEF Berlin
                        <Link to="">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap