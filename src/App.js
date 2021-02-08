import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Button, Input, InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";

import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setinput] = useState("");
  const [message, setmessage] = useState([]);

  const [username, setusername] = useState("");
  console.log(message);

  useEffect(() => {
    setusername(prompt("Ener user name"));
    return () => {};
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessage(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {};
  }, []);

  const sendMessage = (event) => {
    //all the logic to send message goes
    event.preventDefault();
    event.stopPropagation();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setmessage([...message, { username: username, message: input }]);
    setinput("");
  };

  // console.log(message)dsds
  return (
    <div className="App">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png"></img>
        <h1>Messenger</h1>
        <h2>Welcome {username}</h2>
      </div>
      {/* className="app__form" */}
      <div className="container">
                <form className="app__form">
                  <FormControl>
                    <InputLabel>Enter chat</InputLabel>
                    <Input
                      value={input}
                      onChange={(event) => setinput(event.target.value)}
                    />
                  </FormControl>

                  <Button
                    disabled={!input}
                    variant="contained"
                    color="primary"
                    onClick={sendMessage}
                    type="submit"
                  >
                    Send message
                  </Button>
                </form>
      
              <div className="app__message">
                {message.map((message) => (
                  <Message text={message} uname={username}></Message>
                ))}
              </div>
          </div>
    </div>
  );
}

export default App;
