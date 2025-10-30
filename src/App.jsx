import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ProjectDetail from './pages/projectDetails';
import Blog from './pages/blog';
import BlogPost from './pages/blog/BlogPost';
import Layout from './components/layout';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}

export default App
