import React, { useState } from 'react';
import Row from './Row';

const rows = [
  { label: 'A', type: 'economy', seats: ['available','available','occupied','available','available','occupied','available'] },
  { label: 'B', type: 'economy', seats: ['available','available','occupied','available','occupied','available','available'] },
  { label: 'C', type: 'premium', seats: ['available','occupied','available','available','available'] },
  { label: 'D', type: 'premium', seats: ['available','occupied','available','available','available'] },
  { label: 'E', type: 'vip', seats: ['occupied','available','available'] },
  { label: 'F', type: 'vip', seats: ['available','available','occupied'] }
];

const Theatre = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, index) => {
    const isAlreadySelected = selectedSeats.some(s => s.row === row && s.index === index);
    if (isAlreadySelected) {
      setSelectedSeats(prev => prev.filter(s => !(s.row === row && s.index === index)));
    } else {
      setSelectedSeats(prev => [...prev, { row, index }]);
    }
  };

  return (
    <div className="theatre">
      {rows.map((row, index) => (
        <Row
          key={index}
          {...row}
          selectedSeats={selectedSeats}
          onSeatClick={toggleSeat}
        />
      ))}
    </div>
  );
};

export default Theatre;
