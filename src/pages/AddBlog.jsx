import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddBlog = ({ blogsData }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({title: '', thumbnail: '', category: '', author: '', description: ''});

  const blog_categories = [{title: "World", value: "World"}, {title: "U.S.", value: "U.S."}, {title: "Technology", value: "Technology"}, {title: "Design", value: "Design"}, {title: "Culture", value: "Culture"}, {title: "Business", value: "Business"}, {title: "Politics", value: "Politics"}, {title: "Opinion", value: "Opinion"}, {title: "Science", value: "Science"}, {title: "Health", value: "Health"}, {title: "Style", value: "Style"}, {title: "Travel", value: "Travel"}];


  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const thumbnail = e.target.thumbnail.value;
    const category = e.target.category.value;
    const author = e.target.author.value;
    const description = e.target.description.value;

    const newErrors = {
      title: !title ? 'Title is required' : '',
      thumbnail: !thumbnail ? 'Thumbnail URL is required' : '',
      category: !category ? 'Category is required' : '',
      author: !author ? "Author's Name is required" : '',
      description: !description ? 'Description is required' : ''
    };

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, proceed with adding the blog
    if (!Object.values(newErrors).some(error => error !== '')) {
      const today = new Date();
      const currentBlog = {id: Math.round(Math.random() * 1000000), title, thumbnail, category, author, description, date: today};

      const updatedBlogItems = [...blogsData, currentBlog];
      localStorage.setItem('agaetisBlogItems', JSON.stringify(updatedBlogItems));

      navigate("/");
    }
  }

  return (
    <section className="add_blog section_padding">
      <div className="add_blog_header">
        <h2>Add Blog</h2>
        <Link to="/" className='btn'>Back to Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" type="text" placeholder='Enter Title' />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div>
          <input name="thumbnail" type="text" placeholder='Enter Thumbnail URL' />
          {errors.thumbnail && <div className="error">{errors.thumbnail}</div>}
        </div>
        <div>
          <select name="category" id="category">
            <option value="">Select Category</option>
            {blog_categories.map((item, i) => (
              <option key={i} value={item.value}>{item.title}</option>
            ))}
          </select>
          {errors.category && <div className="error">{errors.category}</div>}
        </div>
        <div>
          <input name="author" type="text" placeholder="Enter Author's Name" />
          {errors.author && <div className="error">{errors.author}</div>}
        </div>
        <div>
          <textarea name="description" id="description" placeholder='Enter Description'></textarea>
          {errors.description && <div className="error">{errors.description}</div>}
        </div>
        <div className="form_actions">
          <button className="btn" type="submit">Add Blog</button>
        </div>
      </form>
    </section>
  )
}

export default AddBlog;