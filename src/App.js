import { useState } from 'react';
import './App.css';

function App() {
const [name, setName] = useState("Martin");
const nameChange = () =>{
  setName((prevName)=> (prevName === "Martin" ? "Arturo" : "Martin"));
}

  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={nameChange}>Click to change name</button>
    </div>
  );
}

export default App;
