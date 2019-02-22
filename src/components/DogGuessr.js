import React from "react";

class DogGuessr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  render() {
    return <div id="photo" />;
  }
}

export default DogGuessr;
