import logo from './logo.svg'
import './App.css'

function App() {

  //jsx  
  const name = { name: "eric" }
  return (
    <div className="App hoidanit">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with React and {JSON.stringify(name)}</p>
      </header>
    </div>
  )
}

export default App
