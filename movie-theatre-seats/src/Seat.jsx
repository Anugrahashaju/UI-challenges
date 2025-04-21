import React from 'react';


const Seat = ({ row, index, status, onSeatClick, isSelected }) => {
  const handleClick = () => {
    if (status === 'available') {
      onSeatClick(row, index);
    }
  };

  const seatClass = `seat ${status} ${isSelected ? 'selected' : ''}`;

  return <div className={seatClass} onClick={handleClick}></div>;
};

export default Seat;
