import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increase, decrease } from "./redux/slice/CounterSlice";

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter App Using Redux
      <div className="counter">
        <button className="button incr" onClick={() => dispatch(increase())}>
          Increase
        </button>
        <div className="count ">{`Count : ${count}`}</div>
        <button className="button decr" onClick={() => dispatch(decrease())}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
