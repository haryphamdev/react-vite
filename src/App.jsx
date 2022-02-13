import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'

function App() {

  //jsx  
  const [name, setName] = useState("hoi dan it");

  return (
    <div className="App hoidanit" style={{ color: 'red' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={name} />
        <p>Hello world with React and {name}</p>
        <MyComponent />
      </header>
    </div>
  )
}

export default App
