import { Sidebar, Table } from "./components"
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Sidebar />
      </Router>
    </>
  )
}

export default App
