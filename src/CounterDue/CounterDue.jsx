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
  //il valore iniziale è dato da data e dal count, definito in riga 6
  let consiglio = data[state.count];

  return (
    <div className="CounterDue">
      <div className={"CounterDue__card"}>
        <h1>USEREDUCER COUNTER</h1>
        <h2 className={"card__id"}>({consiglio.id})</h2>
        <h3>{consiglio.text}</h3>
      </div>

      <div className={"btn__div"}>
        <button
          disabled={state.count < 1}
          className={"btn__previous"}
          onClick={() => dispatch({ type: "previous" })}
        >
          Previous advice
        </button>
        {/* Btn increase */}
        <button
          disabled={state.count >= 4}
          className={"btn__next"}
          onClick={() => dispatch({ type: "next" })}
        >
          Next advice
        </button>
      </div>
    </div>
  );
}

export default CounterDue;
