// src/components/ConnectionLine.js
import React from 'react';

const ConnectionLine = ({ x1, y1, x2, y2 }) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#ffa500"
      strokeWidth="2"
    />
  );
};

export default ConnectionLine;