import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES AND COMPONENTS
import {Home} from './Pages'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
