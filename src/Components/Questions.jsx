import { Component } from "react";
import QuestionTable from "./QuestionTable";
import { addQuestion } from "../Actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      rightAnswer: "",
      wrongAnswer1: "",
      wrongAnswer2: "",
      wrongAnswer3: "",
    };

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleRightChange = this.handleRightChange.bind(this);
    this.handleWrong1Change = this.handleWrong1Change.bind(this);
    this.handleWrong2Change = this.handleWrong2Change.bind(this);
    this.handleWrong3Change = this.handleWrong3Change.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleQuestionChange(event) {
    event.preventDefault();
    this.setState({ question: event.target.value });
  }

  handleRightChange(event) {
    event.preventDefault();
    this.setState({ rightAnswer: event.target.value });
  }

  handleWrong1Change(event) {
    event.preventDefault();
    this.setState({ wrongAnswer1: event.target.value });
  }

  handleWrong2Change(event) {
    event.preventDefault();
    this.setState({ wrongAnswer2: event.target.value });
  }

  handleWrong3Change(event) {
    event.preventDefault();
    this.setState({ wrongAnswer3: event.target.value });
  }

  handleAdd(event) {
    event.preventDefault();
    if (
      this.state.question &&
      this.state.rightAnswer &&
      this.state.wrongAnswer1 &&
      this.state.wrongAnswer2 &&
      this.state.wrongAnswer3
    ) {
      const q = {
        ...this.state,
        allAnswers: [
          this.state.rightAnswer,
          this.state.wrongAnswer1,
          this.state.wrongAnswer2,
          this.state.wrongAnswer3,
        ],
      };
      this.props.addQuestion(q);
      this.setState({
        question: "",
        rightAnswer: "",
        wrongAnswer1: "",
        wrongAnswer2: "",
        wrongAnswer3: "",
      });
      document.forms["addForm"].reset();
    }
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
        }}
      >
        {this.props.questions.map((question) => {
          return (
            <QuestionTable key={question.id} id={question.id}></QuestionTable>
          );
        })}
        <form name="addForm" onSubmit={this.handleAdd}>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">
                  <textarea
                    rows="1"
                    className="myinput2"
                    placeholder="Type here the new question"
                    onChange={this.handleQuestionChange}
                  ></textarea>
                </th>
                <td rowSpan="3">
                  <b>
                    <input
                      type="submit"
                      className="mybutton2"
                      value="Add"
                    ></input>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="right-answer">
                  <input
                    className="myinput2"
                    placeholder="Right answer"
                    onChange={this.handleRightChange}
                  ></input>
                </td>
                <td>
                  <input
                    className="myinput2"
                    placeholder="Wrong answer"
                    onChange={this.handleWrong1Change}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="myinput2"
                    placeholder="Wrong answer"
                    onChange={this.handleWrong2Change}
                  ></input>
                </td>
                <td>
                  <input
                    className="myinput2"
                    placeholder="Wrong answer"
                    onChange={this.handleWrong3Change}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.list,
  };
};
export default connect(mapStateToProps, { addQuestion })(withRouter(Questions));
