import './App.css';
import {useState} from "react"
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  const [isImportant, setIsImportant] = useState("Yes")

  function handleClick() {
    setIsImportant("No")
  }

  return (
    <div className="App">
      <Header />
      <Meme />
      <><h1 onClick={handleClick}>{isImportant}</h1></>
    </div>
  );
}

export default App;
