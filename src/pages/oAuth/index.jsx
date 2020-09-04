import React from "react";
import GoogleLogin from "react-google-login";
import { clientID } from "./../../constants/constants";
import "./index.css";

export default function GoogleAuth() {
  const handleResponse = (res) => {
    console.log({ res });
  };

  const handleRequest = (req) => {
    console.log({ req });
  };

  const handleFailure = (failure) => {
    console.log({ failure });
  };

  return (
    <div>
      <GoogleLogin
        onFailure={handleFailure}
        clientId={clientID}
        onSuccess={handleResponse}
        onRequest={handleRequest}
      />
    </div>
  );
}
