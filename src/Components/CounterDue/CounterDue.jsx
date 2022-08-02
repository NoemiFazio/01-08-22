import "./index.css";
import { data } from "../../Assets/data";
import { useReducer } from "react";
import Button from "../Button/Button";

function CounterDue() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);
  //il valore iniziale è dato da data e dal count, definito in riga 7
  let consiglio = data[state.count];

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

  return (
    <div className="CounterDue">
      <div className="CounterDue__card">
        <h1 className="CounterDue__cardTitle">UseReducer Counter</h1>
        <h2 className="Counter__cardId">»{consiglio.id}«</h2>
        <h3 className="CounterDue__text">{consiglio.text}</h3>
      </div>

      <div className={"btn__div"}>
        <Button
          disabled={state.count < 1}
          className={"btn__previous"}
          onClick={() => dispatch({ type: "previous" })}
          btnTextContent={"Previous advice"}
        />

        <Button
          disabled={state.count >= 4}
          className={"btn__next"}
          onClick={() => dispatch({ type: "next" })}
          btnTextContent={"Next advice"}
        />
      </div>
    </div>
  );
}

export default CounterDue;
