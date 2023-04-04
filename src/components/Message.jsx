import React from "react";

export const Message = ({ msg, bgColor }) => {
  let style = {
    padding: "1rem",
    marginBottom: "1rem",
    color: "#fff",
    fontWeigth: "Bold",
    backgroundColor: bgColor,
    textAling: "center",
  };
  return (
    <div style={style}>
      <p>{msg}</p>
    </div>
  );
};
