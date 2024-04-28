import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'

const Home = () => {

  const blogsData = JSON.parse(localStorage.getItem('agaetisBlogItems')) || [];
  const archives = ["March 2014", "April 2014", "May 2014", "June 2014", "July 2014", "August 2014", "September 2014", "October 2014", "November 2014", "December 2014", "January 2014", "February 2014"];

  return (
    <main className='section_padding'>
        <Hero />
        <section className='blog_listing'>
          {blogsData.length ? blogsData.map(item => (
            <BlogCard item={item} key={item.id} />
          )) : (<p className='no_blogs'>No Blogs available to show! Kindly add some.</p>)}
        </section>
        <div className="sample_blogs_div">
          <section className="sample_blog_listing">
            <section className="sample_blog">
              <h3>From the Firehose</h3>
              <div className="sample_blog_header">
                <h1>Sample blog post</h1>
                <span>January 1, 2014 by <span>Mark</span></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem delectus maiores tenetur consequatur facilis totam sunt, deleniti exercitationem omnis!</p>
              </div>
              <p>Lorem ipsum dolor sit <span>amet consectetur</span>, adipisicing elit. Earum doloremque amet et aut unde, eius quam pariatur quisquam eos minima culpa voluptates consectetur, <strong>ullam sed aperiam</strong> nihil nisi. Laudantium, et.</p>
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel hic labore eos deserunt asperiores voluptas consequuntur sint, sed doloremque libero.</p>
              <h3>SubHeading</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nihil repellat temporibus.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas quod animi blanditiis voluptatibus modi pariatur excepturi ad adipisci velit minus tempora vitae perspiciatis est ipsam sit consectetur corrupti libero veritatis, molestiae dolore autem. Amet!</p>
            </section>
            <section className="sample_blog">
              <h3>From the Firehose</h3>
              <div className="sample_blog_header">
                <h1>Sample blog post</h1>
                <span>January 1, 2014 by <span>Mark</span></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem delectus maiores tenetur consequatur facilis totam sunt, deleniti exercitationem omnis!</p>
              </div>
              <p>Lorem ipsum dolor sit <span>amet consectetur</span>, adipisicing elit. Earum doloremque amet et aut unde, eius quam pariatur quisquam eos minima culpa voluptates consectetur, <strong>ullam sed aperiam</strong> nihil nisi. Laudantium, et.</p>
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel hic labore eos deserunt asperiores voluptas consequuntur sint, sed doloremque libero.</p>
              <h3>SubHeading</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nihil repellat temporibus.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas quod animi blanditiis voluptatibus modi pariatur excepturi ad adipisci velit minus tempora vitae perspiciatis est ipsam sit consectetur corrupti libero veritatis, molestiae dolore autem. Amet!</p>
            </section>
          </section>
          <div className="sample_blog_links">
            <div className="about_section">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis facere autem impedit reprehenderit deserunt maiores animi, cumque fugit! Perspiciatis beatae ipsa autem ad excepturi nam enim aspernatur, libero error?</p>
            </div>
            <div className="sample_blog_archives">
              <h3>Archives</h3>
              {archives.map((item, i) => (
                <Link to="/" key={i}>{item}</Link>
              ))}
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home