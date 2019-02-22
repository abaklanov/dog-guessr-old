import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  render() {
    return (
      <div>
        <h2>Dog guessr</h2>
      </div>
    );
  }
}

export default App;
