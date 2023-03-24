import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES AND COMPONENTS
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
