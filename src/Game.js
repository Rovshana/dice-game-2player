import React from "react";
import Dice1 from "./images/dice-1.png";
import Dice2 from "./images/dice-2.png";
import Dice3 from "./images/dice-3.png";
import Dice4 from "./images/dice-4.png";
import Dice5 from "./images/dice-5.png";
import Dice6 from "./images/dice-6.png";

import Style from "./Game.module.css";
const photos = {
  dice1: Dice1,
  dice2: Dice2,
  dice3: Dice3,
  dice4: Dice4,
  dice5: Dice5,
  dice6: Dice6,
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      first: {
        firstDice: photos.dice1,
        secondDice: photos.dice1,
      },
      second: {
        thirdDice: photos.dice1,
        fourthDice: photos.dice1,
      },
      score1: 0,
      score2: 0,
      result1: "",
      result2: "",
      shake: false,
    };
    this.handleRandomAttack = this.handleRandomAttack.bind(this);
  }

  handleRandomAttack() {
    let randomDice1 = Math.ceil(Math.random() * 6);
    let randomDice2 = Math.ceil(Math.random() * 6);
    let randomDice3 = Math.ceil(Math.random() * 6);
    let randomDice4 = Math.ceil(Math.random() * 6);
    let sum1 = randomDice1 + randomDice2;
    let sum2 = randomDice3 + randomDice4;

    this.setState({
      shake: true,
    });
    setTimeout(() => {
      this.setState({
        shake: false,
        first: {
          firstDice: photos[`dice${randomDice1}`],
          secondDice: photos[`dice${randomDice2}`],
        },
        second: {
          thirdDice: photos[`dice${randomDice3}`],
          fourthDice: photos[`dice${randomDice4}`],
        },
      });
      if (sum1 > sum2) {
        this.setState({
          score1: this.state.score1 + 1,
          result1: "You won!!!, congrats",
          result2: "you lost, try again)",
        });
      }
      if (sum1 < sum2) {
        this.setState({
          score2: this.state.score2 + 1,
          result2: "You won!!!, congrats",
          result1: "you lost, try again)",
        });
      }
      if (sum1 == sum2) {
        this.setState({
          result2: "Draw!",
          result1: "Draw!",
        });
      }
    }, 910);
   
    }

  render() {
    return (
      <div>
        <div className={`${Style.main}`}>
          <div>
            {" "}
            <h1 className="text-center">You</h1>
            <h3 className="text-center">Score: {this.state.score1}</h3>
            <h3>Result: {this.state.result1}</h3>
            {this.state.shake ? (
              <img
                className={`${Style.imgShake}`}
                src={this.state.first.firstDice}
                width="150"
              />
            ) : (
              <img src={this.state.first.firstDice} width="150" />
            )}
            {this.state.shake ? (
              <img
                src={this.state.first.secondDice}
                width="150"
                className={`${Style.imgClass} ${Style.imgShake}`}
              />
            ) : (
              <img
                src={this.state.first.secondDice}
                width="150"
                className={`${Style.imgClass}`}
              />
            )}
          </div>
          <div>
            {" "}
            <h1 className="text-center">Computer</h1>
            <h3 className="text-center">Score: {this.state.score2}</h3>
            <h3>Result: {this.state.result2}</h3>
            {this.state.shake ? (
              <img
                src={this.state.second.thirdDice}
                className={`${Style.imgShake}`}
                width="150"
              />
            ) : (
              <img src={this.state.second.thirdDice} width="150" />
            )}
            {this.state.shake ? (
              <img
                src={this.state.second.fourthDice}
                width="150"
                className={`${Style.imgClass} ${Style.imgShake}`}
              />
            ) : (
              <img
                src={this.state.second.fourthDice}
                width="150"
                className={`${Style.imgClass}`}
              />
            )}
          </div>
        </div>
        <br />
        <button onClick={this.handleRandomAttack} className={`${Style.btn}`}>
          Roll dice
        </button>
      </div>
    );
  }
}
export default Game;
