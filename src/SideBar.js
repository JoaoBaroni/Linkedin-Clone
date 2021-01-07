import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";

function SideBar() {
  const userName = useSelector((state) => state.user.user.displayName);
  const userEmail = useSelector((state) => state.user.user.email);
  const userProfilePic = useSelector((state) => state.user.user.photoUrl);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src={
            "https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          alt=""
        />
        <Avatar className="sidebar__avatar" src={userProfilePic} />
        <h2>{userName}</h2>
        <h4>{userEmail}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Quem viu seu perfil</p>
          <p className="sidebar__statNumber">1,503</p>
        </div>

        <div className="sidebar__stat">
          <p>Views em posts</p>
          <p className="sidebar__statNumber">1,503</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default SideBar;
