import React from "react";
import { Button } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <Button variant="secondary" id="skip">
          Skip
        </Button>
      </div>
    );
  }
}

export default Footer;
