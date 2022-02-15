import logo from './logo.svg'
import './App.css'
import SuperForm2 from './components/hooks/SuperForm2'
import TestAudio from './components/hooks/TestAudio'
import SuperInput from './components/hooks/children/SuperInput'
import ErrorBoundaries from './components/hooks/errorBoundaries/ErrorBoundaries'


function App() {
  return (
    <ErrorBoundaries>
      <div className="App hoidanit" style={{ color: 'red' }}>

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          {/* <SuperForm2 />
        <SuperForm2 />
        <SuperForm2 /> */}
          {/* <TestAudio /> */}
          <SuperInput />
        </header>
      </div>
    </ErrorBoundaries>
  )
}

export default App
