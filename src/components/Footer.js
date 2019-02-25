import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  handleSkipButtonClick() {
    // Just reload the page
    document.location.replace("/");
  }

  render() {
    return (
      <div className="row justify-content-center m-3">
        <div className="col-lg-4 text-center">
          <Button
            variant="secondary"
            id="skip"
            onClick={this.handleSkipButtonClick}
          >
            Skip <FontAwesomeIcon icon={faStepForward} />
          </Button>
        </div>
      </div>
    );
  }
}

export default Footer;
