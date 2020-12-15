import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import KeplerGl from 'kepler.gl';
import {addDataToMap} from 'kepler.gl/actions';
import Settings from '../Settings';
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

import './kepler-map.scss';

export default function KeplerMap(props) {

  const dispatch = useDispatch()

  const earthquakeData = {
    fields: [
      {name: 'earthquake_latitude', format: '', type: 'real'},
      {name: 'earthquake_longitude', format: '', type: 'real'},
      {name: 'earthquake_magnitude', format: '', type: 'real'}
    ],
    rows: [
      [38.8371658, -122.8078308, 1.97],
      [36.47695541, -98.74228668,6.585522175],
      [32.4395, -115.1553333, 1.38],
      [38.8129997,-122.8216629,2.02],
      [38.1722,-118.0742,7.4],
      [33.5615,-116.6576667,8.77],
      [60.7642,-151.684,77],
      [17.9155,-66.9568,12],
      [38.8190002,-122.7919998,3.22],
      [38.1648,-118.1075,0.1],
      [38.1482,-118.0897,6.9],
      [38.1425,-118.0902,7],
      [35.58591843,-98.7766037,28.96864128],
      [-6.4989,102.3895,33.14],
      [38.1275,-118.19,0.5],
      [19.22733307,-155.4473267,35.43000031],
      [63.2056,-150.3969,110.9],
      [38.1618,-118.1193,1.9],
      [38.1717,-118.0747,3.3],
      [66.3002,-157.4605,0],
      [17.9581,-66.7528,18],
      [38.1742,-118.0338,10.4],
      [38.1663,-118.075,0.8],
      [38.1707,-118.0858,0.7],
      [38.1695,-118.1135,1.3],
      [37.6368332,-118.8811646,4.75],
      [34.2985,-117.077,0.5],
      [38.1273,-118.1078,0],
      [34.861,-116.3401667,0.33],
      [64.1631,-149.1434,3.2],
      [60.2859,-150.4184,39.3],
      [38.1522,-118.1133,3.4],
      [33.6963333,-116.6806667,17.74],
      [38.1438,-118.0303,1.9],
      [38.1417,-118.0998,5.2],
      [38.1618,-118.0762,0.1],
      [38.1642,-118.0808,1.8],
      [17.9736,-66.9453,10],
      [17.9761,-66.731,11],
      [38.1662,-118.0445,11.6],
      [38.1647,-118.0583,12.8],
      [33.0673333,-116.468,15.05],
      [33.0598333,-116.4558333,14.84],
      [35.881,-117.7063333,7.48]
    ]
  };
  
  const earthquakeConfig = {
    visState: {
      filters: [
      ]
    },
    mapStyle: {styleType: 'dark'}
  };

  useEffect(() => {
    dispatch(
      addDataToMap({
        // datasets
        datasets: {
          info: {
            label: 'Earthquakes in November 2020',
            id: 'earthquakes_november_2020'
          },
          data: earthquakeData
        },
        // option
        option: {
          centerMap: true,
          readOnly: false
        },
        // config
        config: earthquakeConfig
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