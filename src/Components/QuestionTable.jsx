import { deleteQuestion } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

function QuestionTable({ id }) {
  const question = useSelector(
    (state) => state.questions.list.filter((q) => q.id === id)[0]
  );
  const dispatch = useDispatch();

  return (
    <table>
      <tbody>
        <tr>
          <th colSpan="2">{question.question}</th>
          <td rowSpan="3">
            <button
              className="mybutton2"
              onClick={() => dispatch(deleteQuestion(id))}
            >
              Del
            </button>
          </td>
        </tr>
        <tr>
          <td className="right-answer">{question.rightAnswer}</td>
          <td>{question.wrongAnswer1}</td>
        </tr>
        <tr>
          <td>{question.wrongAnswer2}</td>
          <td>{question.wrongAnswer3}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default QuestionTable;
