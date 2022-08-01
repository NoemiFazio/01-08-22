import logo from "./logo.svg";
import "./App.css";
import CounterDue from "./Components/CounterDue/CounterDue";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <Counter />
        <CounterDue />
      </div>
    </div>
  );
}

export default App;
