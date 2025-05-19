// src/components/Editor.js
import React, { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import Palette from './Palette';
import ZoomControl from './ZoomControl';
import './styles.css'; // Импортируем стили

const Editor = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [scaleFactor, setScaleFactor] = useState(1); // Переменная для хранения коэффициента масштабирования

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      await new Promise((resolve) => {
        reader.onload = () => {
          setBackgroundImage(reader.result);
          resolve(); // Завершаем promise
        };
        reader.readAsDataURL(file); // Читаем файл как Data URI
      });
    } catch (err) {
      console.error('Ошибка при загрузке файла:', err.message);
    }
  };

  return (
    <div className="editor-container">
      <div className="menu-bar">
        <label htmlFor="upload-input" className="upload-label">
          Выбрать файл
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileUpload}
          style={{ display: 'none' }} // Скрываем стандартный input
        />
        <Palette />
        <ZoomControl scaleFactor={scaleFactor} setScaleFactor={setScaleFactor} />
        <img
          src="/logo.png" // Убедитесь, что логотип лежит в папке /public
          alt="University Logo"
          className="logo"
        />
      </div>
      <div
        className="canvas-container"
        style={{
          width: 'calc(100% - 120px)', // Вычитаем ширину меню
          height: '100vh', // Весь экран по высоте
          backgroundColor: '#fff',
        }}
      >
        <ReactFlow transform={[scaleFactor, 0, 0]}></ReactFlow>
      </div>
    </div>
  );
};

export default Editor;