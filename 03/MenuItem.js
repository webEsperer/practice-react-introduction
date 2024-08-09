import React from "react";

const MenuItem = (props) => {
  const { url, text } = props;
  return (
    <li>
      <a href={props.url}>{props.text}</a>
    </li>
  );
};

export default MenuItem;
