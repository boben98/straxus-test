import { Component } from "react";
import { withRouter } from "react-router-dom";
import Playfield from "./Playfield";
import { addName } from "../Actions";
import { connect } from "react-redux";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", hasName: props.name };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ hasName: true });
  }

  render() {
    if (!this.state.hasName)
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Your name</h2>
            <input
              className="myinput"
              type="text"
              name="name"
              onChange={this.handleNameChange}
              required
            />
          </label>
          <input className="mybutton" type="submit" value="Start game" />
        </form>
      );
    else if (this.props.questions.list.length <= 0)
      return (
        <div>
          <h2>You have no questions added</h2>
          <button
            className="mybutton"
            onClick={() => this.props.history.push("/questions")}
          >
            Add questions
          </button>
        </div>
      );
    else return <Playfield />;
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    questions: state.questions,
  };
};
export default connect(mapStateToProps, { addName })(withRouter(Play));
