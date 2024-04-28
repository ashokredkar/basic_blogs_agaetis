import React, { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns';

const ViewBlog = () => {

  const blogsData = JSON.parse(localStorage.getItem('agaetisBlogItems')) || [];

  const [currentBlog, setCurrentBlog] = useState();
  const [publishedDate, setPublishedDate] = useState();
  
  useEffect(() => {
    const currentBlogId = window.location.pathname.slice(6);
    const thisBlog = blogsData.find(blog => blog?.id == currentBlogId);
    thisBlog ? setCurrentBlog(thisBlog) : setCurrentBlog(null);

    const parsedDate = new Date(thisBlog.date);
    const formattedDate = format(parsedDate, 'MMMM d, yyyy');
    setPublishedDate(formattedDate);
  }, []);
  
  

  return (
    <section className="viewed_blog section_padding">
      {currentBlog ? (
        <>
          <div className="viewed_blog_header">
            <img src={currentBlog.thumbnail} alt={currentBlog.title} />
            <div>
              <h1>{currentBlog.title}</h1>
              <span>{publishedDate} by <span>{currentBlog.author}</span></span>
            </div>
          </div>
          <div className='viewed_blog_content'>
          {currentBlog.description}
          </div>
        </>
      ) : (<p>Blog Not Found!</p>)}
    </section>
  )
}

export default ViewBlog