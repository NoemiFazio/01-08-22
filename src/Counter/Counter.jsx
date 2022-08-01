import "./index.css";
import { useState } from "react";
import { data } from "../Assets/data";

const Counter = () => {
  const [count, setCount] = useState(0);
  let consiglio = data[count];
  const next = () => setCount(count + 1);
  const previous = () => setCount(count - 1);

  return (
    <div className="Counter">
      <div className={"Counter__card"}>
        <h1>USESTATE COUNTER</h1>
        <h2 className={"card__id"}>({consiglio.id})</h2>
      </div>

      <div className={"btn__div"}>
        <button
          disabled={count === 0 ? true : false}
          onClick={previous}
          className={"btn__previous"}
        >
          Previous advice
        </button>

        <button
          disabled={count >= data.length - 1}
          onClick={next}
          className={"btn__next"}
        >
          Next advice
        </button>
      </div>
    </div>
  );
};

export default Counter;
