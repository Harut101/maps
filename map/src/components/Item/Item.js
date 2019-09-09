import React from 'react';
import { tripDuration } from '../../helpers/dateHelper';
import '../Item/Item.css';

const Item = (props) => {

  const setPosition = (start, end, location, duration) => {
    props.setStartCordinats(start)
    props.setEndCordinats(end)
    props.setLocationName(location)
    props.setDuration(duration)
  }

  return (
      <li className="Item"
        onMouseEnter={()=> setPosition(
           props.start,
           props.end, 
           {startName: props.startLocationName, stopName: props.stopLocationName},
           props.duration

          )}
      >
         <ul className="info-container">
            <li>
                <span>
                 начало поездки : {props.startTime}
                </span>
            </li>
            <li>
                <span>
                  конец поездки : {props.stopTime}
                </span>
            </li>
            <li>
               продолжительность поездки : {tripDuration(props.startTime, props.stopTime)}
            </li>
         </ul>
      </li>
  );
}

export default Item;
