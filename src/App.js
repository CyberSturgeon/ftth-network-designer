// src/App.js
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import SubscriberNode from './components/NetworkElement';
import SplitterNode from './components/SplitterNode';
import './App.css';

const initialElements = [
  {
    id: 'subscriber1',
    type: 'custom',
    data: { label: 'User 1' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'splitter1',
    type: 'splitter',
    data: { label: 'Split 1' },
    position: { x: 200, y: 200 },
  },
];

const customNodeTypes = {
  custom: SubscriberNode,
  splitter: SplitterNode,
};

const App = () => {
  return (
    <div className="editor-container">
      <ReactFlow elements={initialElements} nodeTypes={customNodeTypes}></ReactFlow>
    </div>
  );
};

export default App;
