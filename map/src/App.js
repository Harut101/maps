import React, { useState } from 'react';
import './App.css';
import Map from './components/Maps/Map'
import List from './components/List/List'

const App = () => {
  const [startCordinats, setStartCordinats] = useState([40.7162468, -74.0334587]);
  const [endCordinats, setEndCordinats] = useState([0, 0]);
  const [locationName, setLocationName] = useState({startName: null, stopName: null});
  const [duration, setDuration] = useState(0);
  return (
    <div className="App">
      <div className="map-container">
        <List setDuration={setDuration} setStartCordinats={setStartCordinats} setEndCordinats={setEndCordinats} setLocationName={setLocationName}/>
        <Map duration={duration} startCordinats={startCordinats} endCordinats={endCordinats} locationName={locationName}/>
      </div>
    </div>
  );
}

export default App;
