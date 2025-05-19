// src/App.js
import React from 'react';
import './App.css'; // Импорт стилей сюда
import Editor from './components/Editor';

const App = () => {
  return (
    <div className="editor-container">
      <Editor />
    </div>
  );
};

export default App;
