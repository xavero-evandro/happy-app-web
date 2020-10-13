import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'

import '../styles/pages/orphanages-maps.css'

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

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap