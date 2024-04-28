import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Header = () => {

  const [activeMenu, setActiveMenu] = useState(false);
  const menus = [{title: "World", link: "/"}, {title: "U.S.", link: "/"}, {title: "Technology", link: "/"}, {title: "Design", link: "/"}, {title: "Culture", link: "/"}, {title: "Business", link: "/"}, {title: "Politics", link: "/"}, {title: "Opinion", link: "/"}, {title: "Science", link: "/"}, {title: "Health", link: "/"}, {title: "Style", link: "/"}, {title: "Travel", link: "/"}];

  return (
    <nav className='section_padding'>
      <div className='header'>
        <Link>Subscribe</Link>
        <Link to="/"><h2>Large</h2></Link>
        <div>
          <span><CiSearch /></span>
          <Link className='btn' to="/add-blog">Add Blog</Link>
          <span className="menu_icon" onClick={() => setActiveMenu(!activeMenu)}><IoMenu /></span>
        </div>
      </div>
      <div className={`menus ${activeMenu ? "active" : ""}`}>
        {menus.map((item, i) => (
          <Link key={i} to={`${item.link}`} onClick={() => setActiveMenu(!activeMenu)}>{item.title}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Header