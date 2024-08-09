import React from "react";
import MenuItem from "../03/MenuItem";
import PropTypes, { arrayOf } from "prop-types";

const Menu = (props) => {
  const { items } = props;
  const itemsList = items.map((element) => {
    const { url, text } = element;
    return <MenuItem url={url} text={text} />;
  });

  return <ul>{itemsList}</ul>;
};

Menu.propTypes = {
  items: arrayOf(PropTypes.object),
};

export default Menu;
