import React from 'react';
import KeplerGl from 'kepler.gl';
import Settings from '../Settings';
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

import './kepler-map.scss';

export default function KeplerMap(props) {
  
  return ( 
    <div className='kepler-map'>
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