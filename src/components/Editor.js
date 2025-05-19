// src/components/Editor.js
import React, { useState } from 'react';
import Palette from './Palette';
import ZoomControl from './ZoomControl';
import './styles.css'; // Импортируем стили

const Editor = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBackgroundImage(reader.result);
    };
    reader.readAsDataURL(file);
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
        <ZoomControl />
        <img
          src="/logo.png" // Убедитесь, что логотип лежит в папке /public
          alt="University Logo"
          className="logo"
        />
      </div>
      <div
        className="canvas-container"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', /* Авто-масштабирование */
                backgroundPosition: 'center', /* Центровка изображения */
                backgroundRepeat: 'no-repeat' /* Только одно изображение */
              }
            : {}
        }
      />
    </div>
  );
};

export default Editor;