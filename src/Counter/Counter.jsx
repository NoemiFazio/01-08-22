import "./index.css";
import { useState } from "react";
import { data } from "../Assets/data";

const Counter = () => {
  const [count, setCount] = useState(0);
  let consiglio = data[count];

  return (
    <div className="Counter">
      <div className={"card"}>
        <h1>USESTATE COUNTER</h1>
        <h2 className={"card__text"}>({consiglio.id})</h2>
        <h3>{consiglio.text}</h3>
      </div>

      <div className={"cardactions"}>
        <button
          disabled={count === 0 ? true : false}
          onClick={() => setCount(count - 1)}
          className={"btn__previous"}
        >
          Previous advice
        </button>

        <button
          disabled={count >= data.length - 1}
          onClick={() => setCount(count + 1)}
          className={"btn__next"}
        >
          Next advice
        </button>
      </div>
    </div>
  );
};

export default Counter;
