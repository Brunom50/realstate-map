
/**
 * Module dependencies.
 */

import React from "react";
import {GoogleMap, useJsApiLoader, Marker, InfoWindow} from '@react-google-maps/api';

/**
 * Container style.
 */

const containerStyle = {
  width: '100%',
  height: '100%'
};

/**
 * Map component.
 */

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAekEmNJsaip1aFUf2nQ3uLJ4DXkdE_P7c'
  })

  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 41.4226527,
          lng: -8.407468
        }}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onDragEnd={() => {
          const bounds = map.getBounds();

          for (var i = 0; i < props.locations.length; i++) {
            var marker = props.locations[i];
            var element = document.getElementById(marker.name);

            if (bounds.contains({lat: marker.lat, lng: marker.lng})  === true ) {
              element.style.display = 'block';
            }else{
              element.style.display = 'none';
            }
          }
        }}
        onZoomChanged={() => {
          if(map){
            const bounds = map.getBounds();

            for (var i = 0; i < props.locations.length; i++) {
              var marker = props.locations[i];
              var element = document.getElementById(marker.name);
  
              if (bounds.contains({lat: marker.lat, lng: marker.lng})  === true ) {
                element.style.display = 'block';
              }else{
                element.style.display = 'none';
              }
            }
          }
        }}
      >
        {props.locations.map(location => (
          <Marker
            key={'teste'}
            position={{
              lat: location.lat,
              lng: location.lng
            }
          } 
          onClick={() => alert(`clicked in ${location.name}`)}
          />
        ))}
      </GoogleMap>
  ) : <></>
};

export default Map;