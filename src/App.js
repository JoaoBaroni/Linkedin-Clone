import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import "./Header.css";
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
