
import './App.css';
import { useState } from 'react';

function App() {
 let [counter, setCounter] = useState(0)


  function addCounter()
  {
    if(counter>19)
    {
      setCounter(counter)
    }
    else{
      setCounter(counter+1)
    }
  }

  function removeCounter(){
    setCounter(counter=0)
  }

  function subtractCounter()
  {
    if(counter>0){
    setCounter(counter-1)
    }
    else
    setCounter(counter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Project range(0-20)</h1>   
        <p>Counter Value:- {counter} </p>     
        <button onClick={addCounter}>Add value </button>
        <button onClick={subtractCounter}>subtract value</button>
        <button onClick={removeCounter}>Remove value </button>
      </header>
    </div>
  );
}

export default App;
