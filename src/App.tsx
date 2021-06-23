import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

import toriData from "./data/kirpputorit.json";
/*

*/

function App() {

  const torit = toriData
    
  return (
      <MapContainer center={[60.169857, 24.938379]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {torit.map(tori => (
          <Marker key = {tori.id} position={[tori.gps.latitude, tori.gps.longitude]}>
            <Popup position={[tori.gps.latitude, tori.gps.longitude]}>
              <div>
                <h3>{"Nimi: " + tori.name}</h3>
                <p>{"Osoite: " + tori.address.street}</p>
              </div>
            </Popup>
          </Marker>
        ))};
      </MapContainer>
    );
}

export default App;