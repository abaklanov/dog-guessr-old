import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import DogGuessr from "./DogGuessr";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="title">Dog guessr</div>
        <DogGuessr />
        <div id="photo" />
      </div>
    );
  }
}

export default App;
