import React from "react";
import { useEffect } from "react";
import { TextField, Button, Checkbox } from "@material-ui/core";
import { useState } from "react";
import "./index.css";
import useFetch from "./../../hooks/useFetch";
import axios from "axios";
import { setToken } from "./../../utils/auth";
import useAuthFetch from "./../../hooks/useAuthFetch";

const url = "http://localhost:5000/user/login";
const userInfoUrl = "http://localhost:5000/user/5f47ff4b87ec5c2dd45b122f/auth";
// const url = "https://jsonplaceholder.typicode.com/todos/1";

export default function About() {
  const [creds, setCreds] = useState(null);
  const [chosen, setChosen] = useState([]);

  const { data, loading, error, reFetch } = useFetch(url, "POST", creds);
  const { data: userData, loading: _loading, reFetch: _refetch } = useAuthFetch(
    userInfoUrl,
    "POST"
  );

  useEffect(() => {
    if (!!data?.token) {
      setToken(data.token);
    }
  }, [data]);

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const getUserData = () => {
    _refetch();
  };

  return (
    <div className="about">
      <TextField
        fullWidth
        placeholder="Enter name"
        onChange={handleChange}
        name="name"
      />
      <TextField
        name="email"
        fullWidth
        onChange={handleChange}
        placeholder="email"
      />
      <Button title="Submit" color="primary" onClick={reFetch}>
        Log in
      </Button>

      {data && !!data?.token && (
        <Button title="Submit" color="primary" onClick={getUserData}>
          get user data
        </Button>
      )}

      {loading && <div className="">loading...</div>}

      <div className="">{JSON.stringify(data, null, 5)}</div>
    </div>
  );
}
