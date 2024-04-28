import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ViewBlog from './pages/ViewBlog';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import { useState } from 'react';

function App() {

  // const [blogsData, setBlogsData] = useState([]);
  const blogsData = JSON.parse(localStorage.getItem('agaetisBlogItems')) || [];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Home /><Footer /></>
    },
    {
      path: "/add-blog",
      element: <><AddBlog blogsData={blogsData} /><Footer /></>
    },
    {
      path: "/blog/:id",
      element: <><Header /><ViewBlog /><Footer /></>
    },
    {
      path: "/*",
      element: <PageNotFound />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
