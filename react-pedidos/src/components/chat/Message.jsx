import React from "react";
import "./message.css";

const Message = ({ reff ,message, own }) => {
  return (
    <div ref={reff}
      className={
        own
          ? "w-full  flex flex-col items-end"
          : "w-full  flex flex-col items-start"
      }
    >
      <div className={own ? "true" : "false"}>
        <h5 className={own ? "text-white font-bold" : "font-bold"}>
          {own ? "" : message.sender}
        </h5>
        <p className={own ? "text-white" : ""}>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
