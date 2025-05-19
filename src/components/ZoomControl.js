// src/components/ZoomControl.js
import React, { useState } from 'react';

const ZoomControl = ({ scaleFactor, setScaleFactor }) => {
  const zoomIn = () => {
    setScaleFactor(scaleFactor + 0.1);
  };

  const zoomOut = () => {
    setScaleFactor(Math.max(scaleFactor - 0.1, 0.1)); // Ограничим минимальное значение зума
  };

  return (
    <div className="scroll-zoom-control">
      <button className="zoom-button" onClick={zoomIn}>
        Увеличить (+)
      </button>
      <button className="zoom-button" onClick={zoomOut}>
        Уменьшить (-)
      </button>
    </div>
  );
};

export default ZoomControl;