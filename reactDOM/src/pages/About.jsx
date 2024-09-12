import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
    <div>
      <h2>About</h2>
      <hr />
      <br />
      <Link to='employee'>Employee</Link>
      <Link to='company'>Company</Link>
      <Outlet /> 
      /* iç içe route'ları kullanırken Outlet kullanılır. */
    </div>
  )
}

export default About