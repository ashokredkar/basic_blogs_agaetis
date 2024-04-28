import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='page_not_found'>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className='btn'>Go back to home</Link>
    </section>
  )
}

export default PageNotFound