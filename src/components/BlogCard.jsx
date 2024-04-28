import React from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns';

const BlogCard = ({item}) => {
  
  const formattedDate = format(item.date, 'MMM dd');

  return (
    <div className='blog_card'>
      <div className="blog_card_info">
        <span className="blog_category">{item.category}</span>
        <h2>{item.title}</h2>
        <label className="blog_date">{formattedDate}</label>
        <p>{item.description}</p>
        <Link to={`/blog/${item.id}`}>Continue reading</Link>
      </div>
      <div className="blog_thumbnail">
        <img src={item.thumbnail} alt={item.title} />
      </div>
    </div>
  )
}

export default BlogCard