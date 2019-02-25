import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" className="justify-content-between">
        <Navbar.Brand href="/">DogGuessr</Navbar.Brand>
        <a
          href="https://github.com/abaklanov/dog-guessr"
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Navbar>
    );
  }
}

export default Header;
