import React from 'react';
import Map from './GoogleMap';
import marker from '../data/univerDate.json';


export default function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Map 
        marker={marker}
        isMarkerShown={true}
        mapElement={<div style={{ height: `100%` }} />}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      />
    </div>
  )
}