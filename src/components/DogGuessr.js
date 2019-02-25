import React from "react";
import axios from "axios";
import GuessButtons from "./GuessButtons";

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
            photo: resp.data.message,
            breedToGuess: this.determineBreedToGuess(resp.data.message)
          });
        }).bind(this)
      )
      .catch(err => {
        console.log(err);
      });
  }

  determineBreedToGuess(url) {
    const segments = url.substring(8).split("/");
    return segments[2];
  }

  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-lg-4 text-center">
            <div id="photo">
              <img src={this.state.photo} />
            </div>
          </div>
        </div>
        <GuessButtons />
      </div>
    );
  }
}

export default DogGuessr;
