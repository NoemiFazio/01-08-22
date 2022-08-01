import "./index.css";
import { data } from "../Assets/data";
import { useReducer } from "react";

function CounterDue() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return { count: state.count + 1 };
      case "previous":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  let advice = data[state.count];

  return (
    <div className={"container"}>
      {/* card container */}
      <div className={"card-container"}>
        <div className={"card"}>
          <h2>{}</h2>
          <p className={"card__text"}>Post number: #{}</p>
        </div>
      </div>
      {/* Card Actions */}
      <div className={"card__actions"}>
        {/* Btn decrease */}
        <button
          disabled
          className={"btn--previous"}
          //onClick={/* FUNCTION} *}
        >
          Previous
        </button>
        {/* Btn increase */}
        <button
          disabled
          className={"btn--next"}
          //onClick={/* FUNCTION */}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CounterDue;
