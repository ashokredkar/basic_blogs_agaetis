import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <h1>Title of a longer featured blog post</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, nam animi possimus sint ducimus repellendus dolorem. Saepe fugiat sed dolorum.</p>
      <Link to="/">Continue reading...</Link>
    </section>
  )
}

export default Hero