import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'

function App() {

  //jsx  
  const [name, setName] = useState("");
  const [infor, setInfor] = useState("");
  const handleOnClick = () => {
    setInfor(name)
  }
  return (
    <div className="App hoidanit" style={{ color: 'red' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={() => handleOnClick()}>Submit</button>
        <p>Hello world with React and {infor}</p>
        <MyComponent />
      </header>
    </div>
  )
}

export default App
