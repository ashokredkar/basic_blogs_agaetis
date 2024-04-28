import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='section_padding'>
      <p>Blog template built for <Link to="/">Bootstrap</Link> by <Link to="/">@mdo</Link></p>
      <p><Link to="/">Back to top</Link></p>
    </footer>
  )
}

export default Footer