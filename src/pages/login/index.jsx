import React, { useState, useEffect } from "react";
import "./index.css";
import { InputBase, TextField, Button } from "@material-ui/core";
import useAuthFetch from "./../../hooks/useAuthFetch";
import { BASE_URL } from "./../../constants/constants";
import { setUserID } from "../../utils/auth";
import { getUserID } from "./../../utils/auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [creds, setCreds] = useState(null);
  const history = useHistory();
  const { data, loading, reFetch } = useAuthFetch(
    `${BASE_URL}/user/login`,
    "POST",
    creds
  );

  const moveToChat = () => {
    history.push("/chat");
  };

  useEffect(() => {
    const UID = getUserID();
    if (UID) {
      moveToChat();
    }
  });

  useEffect(() => {
    if (!!data?.user) {
      const { _id } = data.user;
      setUserID(data.user._id);
      moveToChat();
    }
  }, [data]);

  const handleSubmit = () => {
    reFetch();
  };

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    const inputData = {
      [name]: value,
    };

    setCreds({
      ...creds,
      ...inputData,
    });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h5>Login</h5>
      </div>

      <div className="form">
        <TextField
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          required
          fullWidth
          style={{ maxWidth: "90%" }}
        />
        <TextField
          name="password"
          onChange={handleChange}
          placeholder="password"
          type="password"
          required
          fullWidth
          style={{ maxWidth: "90%" }}
        />
      </div>
      <div className="" style={{ maxWidth: "83%", margin: "5rem auto" }}>
        <Button
          onClick={handleSubmit}
          style={{
            width: "100%",
            backgroundColor: "#00ad8a",
            color: "#fff",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
