import React from 'react';
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Header.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Login from "./Login";
import Feed from "./Feed";

function Home() {
  return (
    <div className="app">
    <Header />
    <div className="app__body">
      <SideBar />
      <Feed />
    </div>
  </div>
  )
}

export default Home;
