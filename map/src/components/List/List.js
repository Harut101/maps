import React from 'react';
import '../List/List.css';
import mapData from '../../utils/map-data.json';
import Item from '../Item/Item';

const List = (props) => {
  return (
      <div className="list-container">
         <ul className="list">
            {
                mapData["map-data"].map((data, index) =>{
                    return (
                        <Item
                            key={index}
                            setStartCordinats={props.setStartCordinats}
                            setEndCordinats={props.setEndCordinats}
                            setLocationName={props.setLocationName}
                            setDuration={props.setDuration}
                            start={[data['start station latitude'], data['start station longitude']]}
                            end={[data['end station latitude'], data['end station longitude']]}
                            duration={data['tripduration']}
                            startTime={data['starttime']}
                            stopTime={data['stoptime']}
                            startLocationName={data['start station name']}
                            stopLocationName={data['end station name']}
                        />
                    )
                })
            }
        </ul>
      </div>
  );
}

export default List;
