import React from "react";
import { Button } from "react-bootstrap";

class Footer extends React.Component {
  handleSkipButtonClick() {
    // Just reload the page
    document.location.replace("/");
  }

  render() {
    return (
      <div className="row">
        <Button
          variant="secondary"
          id="skip"
          onClick={this.handleSkipButtonClick}
        >
          Skip
        </Button>
      </div>
    );
  }
}

export default Footer;
