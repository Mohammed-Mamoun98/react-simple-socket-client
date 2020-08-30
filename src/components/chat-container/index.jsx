import React from "react";
import { Paper } from "@material-ui/core";
export default function ChatContainer(props) {
  return (
    <Paper style={{ minHeight: "40rem", width: "30rem" }}>
      {props.children}
    </Paper>
  );
}
