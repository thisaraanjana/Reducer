import { useReducer, useState } from "react";
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <div>
      <input
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
        type="text"
        name=""
        id=""
      />

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
      {state.count}
    </div>
  );
}
