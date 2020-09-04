import React from "react";
import "./index.css";

export default function ChatUnit(props) {
  return (
    <div className="chat-unit">
      <div className="chat-name">{props.name}</div>
    </div>
  );
}
