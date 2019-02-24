import React from "react";
import axios from "axios";

class DogGuessr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: ""
    };
  }

  componentDidMount() {
    const response = axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(
        (resp => {
          this.setState({
            photo: resp.data.message
          });
        }).bind(this)
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div id="photo" />;
  }
}

export default DogGuessr;
