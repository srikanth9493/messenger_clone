import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message(props) {
  console.log(props, "hai");
  const  message = props.text;
  const uname=props.uname;

  console.log(message, uname, "hello");
  const isUser=(uname===message.username)
  console.log(isUser,"true or flase")
  return (
    <div>
      <Card className={isUser? "message__userCard":"message__guestCard"}>
        <CardContent>
          <Typography color="primary" variant="h5" component="h2" gutterBottom>
            {message.message}:{message.username}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
// className='message_user'
export default Message;
