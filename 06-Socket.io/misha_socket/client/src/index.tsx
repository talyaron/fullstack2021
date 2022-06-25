import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { io } from "socket.io-client";
export const socket = io();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <App />

);
