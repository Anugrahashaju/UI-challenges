import React from 'react';
import Screen from './Screen';
import Theatre from './Theatre';
import Legend from './Legend';

const App = () => (
  <div className="app">
    <h1>Movie Seat Booking</h1>
    <Screen />
    <Theatre />
    <Legend />
  </div>
);

export default App;
