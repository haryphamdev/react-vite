import logo from './logo.svg'
import './App.css'
import SuperForm2 from './components/hooks/SuperForm2'
import TestAudio from './components/hooks/TestAudio'
import SuperInput from './components/hooks/children/SuperInput'
import ErrorBoundaries from './components/hooks/errorBoundaries/ErrorBoundaries'
import Parent from './components/hooks/ChildrenAndParent/Parent'


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
          <div className='super-input-container'>
            <SuperInput />
          </div>


          {/* <Parent /> */}
        </header>
      </div>
    </ErrorBoundaries>
  )
}

export default App
