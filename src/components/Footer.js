import React from "react";
import { Button } from "react-bootstrap";

class Footer extends React.Component {
  handleSkipButtonClick() {
    // Just reload the page
    document.location.replace("/");
  }

  render() {
    return (
      <div className="row justify-content-center m-3">
        <div class="col-lg-4 text-center">
          <Button
            variant="secondary"
            id="skip"
            onClick={this.handleSkipButtonClick}
          >
            Skip
          </Button>
        </div>
      </div>
    );
  }
}

export default Footer;
