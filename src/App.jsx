import logo from './logo.svg'
import './App.css'
import SuperForm2 from './components/hooks/SuperForm2'
import TestAudio from './components/hooks/TestAudio'


function App() {
  return (
    <div className="App hoidanit" style={{ color: 'red' }}>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        {/* <SuperForm2 />
        <SuperForm2 />
        <SuperForm2 /> */}
        <TestAudio />
      </header>
    </div>
  )
}

export default App
