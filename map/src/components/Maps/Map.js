import React from 'react';
import { Map as LeafletMap, TileLayer, Popup, CircleMarker  } from 'react-leaflet';
import '../Maps/Map.css';
import mapData from '../../utils/map-data.json';
import { calculateRadius } from '../../helpers/dateHelper';

const Map = (props) => {
  
  return (
    <LeafletMap
        center={[props.startCordinats[0], props.startCordinats[1]]}
        zoom={6}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
                            <CircleMarker center={[40.7162469, -74.0334588]} 
                               radius={calculateRadius(props.duration) } 
                               color='#4204de'
                               onMouseOver={(e) => { e.target.openPopup() }}
                               onMouseOut={(e) => { e.target.closePopup() }}
                             >
                                <Popup>
                                   "Exchange Place"
                                </Popup>
                           </CircleMarker>
         {
                mapData["map-data"].map((data, index) =>{
          
                    return (
                        <React.Fragment key={index}>
                
                            <CircleMarker center={[data['end station latitude'], data['end station longitude']]} 
                              radius={data['end station longitude'] === props.endCordinats[1] ? calculateRadius(props.duration) : 5} 
                              color={data['end station longitude'] === props.endCordinats[1] ? '#4204de' : '#FF4E00'}
                               onMouseOver={(e) => { e.target.openPopup() }}
                               onMouseOut={(e) => { e.target.closePopup() }}
                            >
                                <Popup>
                                  {data['end station name']}
                                </Popup>
                            </CircleMarker>
                        </React.Fragment>
                    )
                })
            }
      </LeafletMap>
  );
}

export default Map;
