import "./styles.css";
import React, {useState} from "react";

function App(){

  const[inputText, setInputText]=useState("");
  const[items, setItems]=useState([]);
  function handleChange(event){
    setInputText(event.target.value);
  }

  function addItems(){
    setItems( (prevValue) => {
      return [...prevValue, inputText];
    })
    setInputText("");
  }
  return(
    <div className="container">
      <div className="heading">
      <h1>To-Do-List</h1>
      </div>
      <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItems}>
        <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}

        </ul>
      </div>
    </div>
  );
}

export default App;