import React from 'react';
import KeplerGl from 'kepler.gl';
import Settings from '../Settings';
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

export default function KeplerMap(props) {
  
  return ( 
    <div className="App" style={{'position':'absolute','width':'100%','height':'100%'}}>
      <AutoSizer>
        {({height, width}) => (
        <KeplerGl
          id="keplermap"
          width={width}
          height={height}
          mapboxApiAccessToken={Settings.MAPBOX_KEY}
        />
        )}
      </AutoSizer>
    </div>
  )

}