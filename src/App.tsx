import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

import toriData from "./data/kirpputorit.json";
import teslaData from "./data/tesla-sites.json";
/*
use  "import toriData" same way as "import teslaData"
*/

function App() {

  const filteredStations = teslaData.filter(tsla => tsla.address.country === "Italy")
  const torit = toriData
    
  return (
      <MapContainer center={[42.585444, 13.257684]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {torit.map(tori => (
          <Marker key = {tori.id} position={[tori.gps.latitude, tori.gps.longitude]}>
            <Popup position={[tori.gps.latitude, tori.gps.longitude]}>
              <div>
                <h3>{"Name: " + tori.name}</h3>
                <p>{"Status: " + tori.address.street}</p>
              </div>
            </Popup>
          </Marker>
        ))};
        
        {filteredStations.map(tsla => (
          <Marker key = {tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]}>
            <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
              <div>
                <h3>{"Name: " + tsla.name}</h3>
                <p>{"Street: " + tsla.address.street}</p>
              </div>
            </Popup>
          </Marker>
        ))};
      </MapContainer>
    );
}

export default App;