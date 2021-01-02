import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

function Post({name, description, message, photoUrl}) {


  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>João Vitor</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <hr />
      <div className="post__actions">
      <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title={"Like"}
            color="rgba(0, 0, 0, 60%)"
          />
            <InputOption
            Icon={CommentOutlinedIcon}
            title={"Comment"}
            color="rgba(0, 0, 0, 60%)"
          />
            <InputOption
            Icon={ShareOutlinedIcon}
            title={"Share"}
            color="rgba(0, 0, 0, 60%)"
          />
      </div>
    </div>
  )
}


export default Post
