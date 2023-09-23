
import './App.css';
import { useState } from 'react';

function App() {
 let [counter, setCounter] = useState(0)


  function addCounter()
  {
    counter = counter+1;
    setCounter(counter)
    console.log(counter)
  }

  function removeCounter(){
    setCounter(counter=0)
  }

  function subtractCounter()
  {
    setCounter(counter-1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Project</h1>   
        <p>Counter Value:- {counter} </p>     
        <button onClick={addCounter}>Add value </button>
        <button onClick={subtractCounter}>subtract value</button>
        <button onClick={removeCounter}>Remove value </button>
      </header>
    </div>
  );
}

export default App;
