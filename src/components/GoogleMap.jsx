import { useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';


const Map = withScriptjs(withGoogleMap((props) => {
  const { marker, isMarkerShown } = props;
  const [selectMarker, setSelectMarker] = useState(null);

  const MARKERS = marker && marker.features
    .map((marker, i) => (
      <Marker
        key={'' + i}
        icon={{ url: '/marker.png' }}
        onClick={() => setSelectMarker(marker)}
        position={{ lat: +marker.geometry.coordinates[1], lng: +marker.geometry.coordinates[0] }}
      />
    ));


  return (
    <GoogleMap
      defaultCenter={{ lat: 55.751244, lng: 37.618423 }}
      defaultZoom={11}
    >
      {isMarkerShown && MARKERS}
      {selectMarker &&
        <InfoWindow
          onCloseClick={() => setSelectMarker(null)}
          position={{ lat: +selectMarker.geometry.coordinates[1], lng: +selectMarker.geometry.coordinates[0] }}
        >
          <div>
            <h3 style={{ textAlign: 'center' }}>Учебные заведения Москвы</h3>
            <p><span>{`"${selectMarker.properties.objcode}" `}</span>{selectMarker.properties.objttl}</p>
          </div>
        </InfoWindow>
      }
    </GoogleMap>
  )
}));

export default Map;