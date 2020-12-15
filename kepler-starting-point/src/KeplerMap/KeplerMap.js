import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import KeplerGl from 'kepler.gl';
import {addDataToMap} from 'kepler.gl/actions';
import Settings from '../Settings';
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

import earthquakeData from '../data/earthquakes.json';
import './kepler-map.scss';

export default function KeplerMap(props) {

  const dispatch = useDispatch()

  const config = {
    visState: {
      filters: [
      ]
    },
    mapStyle: {styleType: 'dark'}
  };

  useEffect(() => {

    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: 'Earthquakes morning of 15th November 2020',
            id: 'earthquakes_am_15_november_2020'
          },
          data: earthquakeData
        },
        option: {
          centerMap: true,
          readOnly: false
        },
        config: config
      })
    );
  }, [])
  
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