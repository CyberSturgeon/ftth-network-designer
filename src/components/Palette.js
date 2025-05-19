// src/components/Palette.js
import React from 'react';

const Palette = () => {
  const handleAddSubscriber = () => {
    console.log('Добавлен элемент "Абонент"');
  };

  const handleAddSplitter = () => {
    console.log('Добавлен элемент "Сплиттер"');
  };

  const handleAddCluster = () => {
    console.log('Добавлен элемент "Кластер"');
  };

  const handleAddSuperCluster = () => {
    console.log('Добавлен элемент "Суперкластер"');
  };

  return (
    <div className="palette">
      <button onClick={handleAddSubscriber}>Абонент</button>
      <button onClick={handleAddSplitter}>Сплиттер</button>
      <button onClick={handleAddCluster}>Кластер</button>
      <button onClick={handleAddSuperCluster}>Суперкластер</button>
    </div>
  );
};

export default Palette;