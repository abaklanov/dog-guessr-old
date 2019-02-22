import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import DogGuessr from "./DogGuessr";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DogGuessr />
      </div>
    );
  }
}

export default App;
