import "./index.css";
import { useState } from "react";
import { data } from "../../Assets/data";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  let consiglio = data[count];
  const next = () => setCount(count + 1);
  const previous = () => setCount(count - 1);

  return (
    <div className="Counter">
      <div className={"Counter__card"}>
        <h1 className="Counter__cardTitle">UseState Counter</h1>
        <h2 className={"Counter__cardId"}>»{consiglio.id}«</h2>
        <h3 className="Counter__text">{consiglio.text}</h3>
      </div>

      <div className={"btn__div"}>
        <Button
          btnTextContent={"Previous advice"}
          disabled={count === 0 ? true : false}
          onClick={previous}
          className={"btn__previous"}
        />

        <Button
          btnTextContent={"Next advice"}
          disabled={count >= data.length - 1}
          onClick={next}
          className={"btn__next"}
        />
      </div>
    </div>
  );
};

export default Counter;
