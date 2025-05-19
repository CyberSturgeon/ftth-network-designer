// src/components/Editor.js
import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactFlow from 'react-flow-renderer';
import Palette from './Palette';
import ZoomControl from './ZoomControl';
import './styles.css'; // Импортируем стили

const Editor = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ready, setReady] = useState(false); // Flag для блокировки рендеринга
  const canvasRef = useRef(null); // Ref для контейнера

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

  useLayoutEffect(() => {
    if (canvasRef.current) {
      const { clientHeight, clientWidth } = canvasRef.current;
      if (clientHeight > 0 && clientWidth > 0) {
        setReady(true); // Включаем рендеринг после того, как размеры определены
      } else {
        console.warn('Размеры холста недействительны.');
      }
    }
  }, []); // Используем пустой массив, чтобы эффект срабатывал единожды

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
        ref={canvasRef} // Используем ref
        className="canvas-container"
        style={{
          width: '100%', // Всю ширину
          height: '100vh', // Полную высоту окна
          backgroundImage: `url(${backgroundImage})`, // Фон
          backgroundSize: 'cover', // Покрытие
          backgroundPosition: 'center', // По центру
          backgroundRepeat: 'no-repeat', // Нет повтора
        }}
      >
        {ready && ( // Рендерим ReactFlow только тогда, когда размеры готовы
          <ReactFlow></ReactFlow>
        )}
      </div>
    </div>
  );
};

export default Editor;