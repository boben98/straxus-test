import { withRouter } from "react-router-dom";
import { resetPoints } from "../Actions";
import { useDispatch } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <button
        className="mode"
        disabled={window.location.pathname === "/" ? "true" : ""}
        onClick={() => props.history.push("/")}
      >
        Play
      </button>
      <h1
        onClick={() => {
          window.location.reload();
          dispatch(resetPoints());
        }}
      >
        Quiz App
      </h1>
      <button
        className="mode"
        disabled={window.location.pathname === "/questions" ? "true" : ""}
        onClick={() => props.history.push("/questions")}
      >
        Questions
      </button>
    </div>
  );
}

export default withRouter(Header);
