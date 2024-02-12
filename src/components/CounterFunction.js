import React, { useEffect, useState } from "react";
import {store} from "../store/store";
import { decrement, increment } from "../store/action/CounterAction";

function CounterFunction() {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
      updateState()
      store.subscribe(updateState);
    })



    function updateState(){
        const state= store.getState();
        setCounter(state.counter);
    }

    function onIncrement(){
      store.dispatch(increment());

    }
    function onDecrement(){
      store.dispatch(decrement());

    }
  return (
    <div>
      <div> CounterFunction component</div>
      <div>
        {counter}
      </div>
      <div>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>

      </div>
    </div>
  );
}

export default CounterFunction;
