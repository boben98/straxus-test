import { withRouter } from "react-router-dom";
import { resetPoints } from "../Actions";
import { useDispatch } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <button
        className="mode"
        disabled={window.location.pathname === "/straxus-test" ? "true" : ""}
        onClick={() => props.history.push("/straxus-test")}
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
        disabled={
          window.location.pathname === "/straxus-test/questions" ? "true" : ""
        }
        onClick={() => props.history.push("/straxus-test/questions")}
      >
        Questions
      </button>
    </div>
  );
}

export default withRouter(Header);
