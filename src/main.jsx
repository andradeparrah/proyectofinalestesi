import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../output.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user/UserProvider';
const root = ReactDOM.createRoot(document.getElementById("root"));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
