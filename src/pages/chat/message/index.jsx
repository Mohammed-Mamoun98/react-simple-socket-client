import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Message(props) {
  const { mine, text } = props;

  const className = mine ? "my-message" : "other-message";
  return (
    <div className={"message-container " + className}>
      <div className={className}>{text}</div>
    </div>
  );
}

Message.propTypes = {
  mine: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
