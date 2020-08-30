import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { TextField } from "@material-ui/core";

// const socket = io.connect("http://localhost:5000");s

export default function Chat(props) {
  const [msg_1, setMsg_1] = useState("");
  const [msg_2, setMsg_2] = useState("");

  useEffect(() => {
    // socket.on("message_1", ({ msg }) => {
    //   console.log("change in msg 1", msg);
    //   setMsg_1(msg);
    // });
    // socket.on("message_2", ({ msg }) => {
    //   setMsg_2(msg);
    // });
  }, []);

  const handleFirstChange = (e) => {
    // const msg = e.target.value;
    // socket.emit("message_1", { msg });
  };

  const handleSecondChange = (e) => {
    // const msg = e.target.value;
    // setMsg_2(msg);
    // socket.emit("message_2", { msg });
  };

  return (
    <div>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="-User 1 - Enter a message..."
        onChange={handleFirstChange}
        value={msg_1}
      />
      <TextField
        variant="outlined"
        fullWidth
        placeholder="-User 2 - Enter a message..."
        onChange={handleSecondChange}
        style={{ marginTop: "3rem" }}
        value={msg_2}
      />
    </div>
  );
}
