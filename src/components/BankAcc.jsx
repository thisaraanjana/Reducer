import { useReducer, useState } from "react";
export default function BankAcc() {
  function reducer(state, action) {
    if(action.type=="add"){
        return{...state,balance:state.balance+action.payload};
    }
    if(action.type=="remove"){
        return{...state,balance:state.balance-action.payload};
    }
  }
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  return (
    <div>
        {state.balance}
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        name=""
        id=""
      />
      <button onClick={()=>dispatch({type:"add",payload:Number(amount)})}>deposit</button>
      <button onClick={()=>dispatch({type:"remove",payload:Number(amount)})}>Witdrow</button>
    </div>
  );
}
