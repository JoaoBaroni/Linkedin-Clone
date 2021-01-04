import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

function isAuth(){
  return selectUser;
}

export default isAuth;