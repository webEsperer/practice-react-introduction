import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

// const Header = () => {
//   return <header style={headerStyle}>Moja pierwsza strona w React</header>;
// };

class Header extends React.Component {
  render() {
    return <header style={headerStyle}>Moja pierwsza strona w React</header>;
  }
}

const headerStyle = {
  border: "1px solid black",
  backgroundColor: "yellow",
};
// root.render(<Header />);
root.render(<Header />);
