
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("Starting React App...");
const root = ReactDOM.createRoot(rootElement);
try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("React Render Called");
} catch (e) {
  console.error("React Render Error:", e);
}
