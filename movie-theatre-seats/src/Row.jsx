import React from 'react';
import Seat from './Seat';

const Row = ({ label, type, seats, selectedSeats, onSeatClick }) => (
  <div className={`row ${type}`}>
    <div className="row-label">{label}</div>
    {seats.map((status, i) => (
      <Seat
        key={i}
        row={label}
        index={i}
        status={status}
        isSelected={selectedSeats.some(s => s.row === label && s.index === i)}
        onSeatClick={onSeatClick}
      />
    ))}
  </div>
);

export default Row;
