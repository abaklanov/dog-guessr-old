import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

class GuessButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: [],
      areButtonsDisabled: false
    };
  }

  componentDidMount() {
    Axios.get("https://dog.ceo/api/breeds/list")
      .then(
        (resp => {
          this.setState({
            schema: this.getSchema(resp.data.message),
            areButtonsDisabled: false
          });
        }).bind(this)
      )
      .catch(err => {});
  }

  getRandomBreeds(breeds, num = 3) {
    const result = [];
    for (let i = 0; i < num; i++) {
      const randomBreed = this.getRandomBreed(breeds);
      result.push(randomBreed);
    }
    return result;
  }

  getRandomBreed(breeds) {
    const min = 0;
    const max = breeds.length;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return breeds[rand];
  }

  getArrayOfGuesses(breeds) {
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // Clone
    const res = this.getRandomBreeds(breeds);
    res.push(this.props.breedToGuess);
    return shuffle(res);
  }

  getSchema(breeds) {
    const guesses = this.getArrayOfGuesses(breeds);
    return guesses.map(guess => {
      return {
        btnVariant: "light",
        isCorrect: guess === this.props.breedToGuess,
        answer: guess
      };
    });
  }

  doGuess(index) {
    const currentSchemaState = this.state.schema.slice(0);

    currentSchemaState[index].btnVariant = currentSchemaState[index].isCorrect
      ? "success"
      : "danger";

    this.setState({
      schema: currentSchemaState,
      areButtonsDisabled: true
    });

    setTimeout(() => {
      window.location.replace("./");
    }, 3000);
  }

  render() {
    const possibleGuesses = this.state.schema.map((element, index) => (
      <div className="row" key={index}>
        <div className="col-lg-12 text-center">
          <Button
            variant={element.btnVariant}
            className="guessBtn m-1"
            onClick={e => this.doGuess(index, e)}
            disabled={this.state.areButtonsDisabled ? "disabled" : ""}
          >
            {element.answer}
          </Button>
        </div>
      </div>
    ));
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4">{possibleGuesses}</div>
      </div>
    );
  }
}

export default GuessButtons;
