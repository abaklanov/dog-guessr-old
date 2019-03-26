import React from "react";
import axios from "axios";
import GuessButtons from "./GuessButtons";

class DogGuessr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      breedToGuess: ""
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
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 text-center">
            <div id="photo" className=" m-1">
              <img
                src={this.state.photo}
                className="border p-2"
                style={{ height: 500 + "px" }}
              />
            </div>
          </div>
        </div>

        {this.state.breedToGuess !== "" ? (
          <GuessButtons breedToGuess={this.state.breedToGuess} />
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default DogGuessr;
