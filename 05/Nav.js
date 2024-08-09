import React from "react";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav>
      <Menu
        items={[
          {
            url: "https://google.com",
            text: "open Google",
          },
          { url: "https://wp.com", text: "open Wirtualna Polska" },
        ]}
      />
    </nav>
  );
};

export default Nav;
