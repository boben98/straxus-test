import { Component } from "react";
import { connect } from "react-redux";
import { addPoint, resetPoints } from "../Actions";
import { withRouter } from "react-router-dom";

//credit: Laurens Holst (stackoverflow)
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}

class Playfield extends Component {
  constructor(props) {
    super(props);
    props.resetPoints();
    const l = shuffleArray(props.questions);
    this.state = {
      list: l,
      currentQuestion: l[0].question,
      currentRightAnswer: l[0].rightAnswer,
      currentAnswers: shuffleArray(l[0].allAnswers),
      hit: false,
      miss: false,
      wrongAnswer: "",
    };

    this.next = this.next.bind(this);
  }

  answer(answer) {
    if (answer === this.state.currentRightAnswer) {
      this.setState({ hit: true });
      this.props.addPoint();
    } else this.setState({ miss: true, wrongAnswer: answer });
  }

  next() {
    const l = shuffleArray(this.state.list.slice(1));
    this.setState({
      list: l,
      currentQuestion: l[0].question,
      currentRightAnswer: l[0].rightAnswer,
      currentAnswers: shuffleArray(l[0].allAnswers),
      hit: false,
      miss: false,
      wrongAnswer: "",
    });
  }

  render() {
    const renderNext = () => {
      if (this.state.list.length > 1 && (this.state.hit || this.state.miss)) {
        return (
          <button className="mybutton" onClick={this.next}>
            Next
          </button>
        );
      } else if (this.state.hit || this.state.miss)
        return (
          <div>
            <h2>We are out of questions</h2>
            <div className="player-points">
              <button
                className="mybutton"
                onClick={() => {
                  window.location.reload();
                  this.props.resetPoints();
                }}
              >
                Restart game
              </button>{" "}
              <button
                className="mybutton"
                onClick={() =>
                  this.props.history.push("/straxus-test/questions")
                }
              >
                Add questions
              </button>
            </div>
          </div>
        );
    };

    const style = (answer) => {
      if (this.state.hit) {
        if (answer === this.state.currentRightAnswer) {
          return { background: "#71a371" };
        }
      } else if (this.state.miss) {
        if (answer === this.state.currentRightAnswer) {
          return { background: "#71a371" };
        }
        if (answer === this.state.wrongAnswer) {
          return { background: "#d46969" };
        }
      } else return {};
    };

    return (
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="player-points">
          <span className="score">Player: {this.props.name}</span>
          <span className="score">Points: {this.props.points}</span>
        </div>
        <h2>{this.state.currentQuestion}</h2>
        <button
          className="answer"
          style={style(this.state.currentAnswers[0])}
          onClick={() => this.answer(this.state.currentAnswers[0])}
          disabled={this.state.hit || this.state.miss ? "true" : ""}
        >
          {this.state.currentAnswers[0]}
        </button>
        <button
          className="answer"
          style={style(this.state.currentAnswers[1])}
          onClick={() => this.answer(this.state.currentAnswers[1])}
          disabled={this.state.hit || this.state.miss ? "true" : ""}
        >
          {this.state.currentAnswers[1]}
        </button>
        <button
          className="answer"
          style={style(this.state.currentAnswers[2])}
          onClick={() => this.answer(this.state.currentAnswers[2])}
          disabled={this.state.hit || this.state.miss ? "true" : ""}
        >
          {this.state.currentAnswers[2]}
        </button>
        <button
          className="answer"
          style={style(this.state.currentAnswers[3])}
          onClick={() => this.answer(this.state.currentAnswers[3])}
          disabled={this.state.hit || this.state.miss ? "true" : ""}
        >
          {this.state.currentAnswers[3]}
        </button>
        {renderNext()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    points: state.points,
    questions: state.questions.list,
  };
};
export default connect(mapStateToProps, { addPoint, resetPoints })(
  withRouter(Playfield)
);
