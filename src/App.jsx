import logo from "./logo.svg";
import "./App.css";
import CounterDue from "./CounterDue/CounterDue";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterDue />
    </div>
  );
}

export default App;
