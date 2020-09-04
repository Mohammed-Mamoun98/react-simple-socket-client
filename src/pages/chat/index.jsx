import React, { useState, useEffect } from "react";
import "./index.css";
import ChatUnit from "./chat-unit/index";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../constants/constants";
import { excludeMeFromUsers } from "./../../methods/chats";
import MessageInput from "./message-input";
import Message from "./message";

export default function ChatPage() {
  const [user, setUsers] = useState([]);
  const { data, loading } = useFetch(`${BASE_URL}/user/all_users`, "GET");

  useEffect(() => {
    if (!!data && !!data.users) {
      const _users = excludeMeFromUsers(data.users);
      setUsers(_users);
    }
  }, [data, loading]);

  return (
    <div className="chat-page">
      <div className="chats-side">
        {user.map((u) => (
          <ChatUnit name={u.name} />
        ))}
      </div>
      <div className="chat-side">
        <div className="chat-body">
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message mine text="hello from me" />
          <Message text="hello from other" />
        </div>
        <MessageInput />
      </div>
    </div>
  );
}
