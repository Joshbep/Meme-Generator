import './App.css';
import {useState} from "react"
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  const [result, func] = useState("Yes")
  return (
    <div className="App">
      <Header />
      <Meme />
      <><h1>{result}</h1></>
    </div>
  );
}

export default App;
