import React, { useState } from "react";

function CounterFnction() {
    const [counter,setCounter]=useState(0);

    function onIncrement(){

    }
    function onDecrement(){
        
    }
  return (
    <div>
      <div> CounterFnction component</div>
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

export default CounterFnction;
