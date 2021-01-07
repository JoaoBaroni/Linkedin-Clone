import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase';
import {useSelector} from 'react-redux';
import {selectUser} from './features/counter/userSlice';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const userName = useSelector((state) => state.user.user.displayName);
  const userEmail = useSelector((state) => state.user.user.email);
  const userProfilePic = useSelector((state) => state.user.user.photoUrl);


  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    console.log(selectUser.displayName);
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: userName,
      description: userEmail,
      message: input,
      photoUrl: userProfilePic,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={handleInputChange} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"Foto"} color="#70B5F9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color="#E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title={"Evento"} color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title={"Escrever artigo"}
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.length > 0 &&
        posts.map(({id, data: { name, description, message, photoUrl}}) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}


    </div>
  );
}

export default Feed;
