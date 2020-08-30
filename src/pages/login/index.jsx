import React from "react";
import GoogleLogin from "react-google-login";
import { clientID } from "./../../constants/constants";

export default function Login() {
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
