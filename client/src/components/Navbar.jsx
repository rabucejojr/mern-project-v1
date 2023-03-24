import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <header>
        <div className='container'>
          <Link to='/'>
            <h1>PSTO-SDN FILE SYSTEM</h1>
          </Link>
        </div>
      </header>
    </>
  )
}
export default Navbar
