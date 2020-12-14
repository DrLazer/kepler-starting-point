import React from 'react';
import KeplerGl from 'kepler.gl';
import Settings from '../Settings';

export default function KeplerMap(props) {
  
  return (  
    <KeplerGl
      id="keplermap"
      mapboxApiAccessToken={Settings.MAPBOX_KEY}
      width={props.width}
      height={props.height}/>
  )

}