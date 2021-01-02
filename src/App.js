import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import "./Header.css";
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
