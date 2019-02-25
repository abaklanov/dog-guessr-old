import React from "react";
import Header from "./Header";
import DogGuessr from "./DogGuessr";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DogGuessr />
        <Footer />
      </div>
    );
  }
}

export default App;
