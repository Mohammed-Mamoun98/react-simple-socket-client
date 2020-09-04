import React from "react";
import { InputBase } from "@material-ui/core";
import "./index.css";
export default function MessageInput(props) {
  return (
    <div className="message-input">
      <InputBase placeholder="Type a message" style={{ color: "white" }} />
    </div>
  );
}
