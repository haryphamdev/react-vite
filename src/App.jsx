import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  //jsx  
  const name = { name: "eric" }
  return (
    <div className="App hoidanit" style={{ color: 'red' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with React and {JSON.stringify(name)}</p>
        <MyComponent />
      </header>
    </div>
  )
}

export default App
