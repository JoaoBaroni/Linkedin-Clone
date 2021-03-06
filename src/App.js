import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Header.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Login from "./Login";
import Feed from "./Feed";
import Register from "./Register";
import Routes from "./Routes";

function App() {
  const user = useSelector(selectUser);

  return <Routes />;
}

export default App;
