import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ProjectDetail from './pages/projectDetails';
import AnimationDetail from './pages/animationDetails';
import Blog from './pages/blog';
import BlogPost from './pages/blog/BlogPost';
import BrannVRnCaseStudy from './pages/caseStudy/brannvrn';
import HobbyistCaseStudy from './pages/caseStudy/hobbyist';
import GoneFishingCaseStudy from './pages/caseStudy/gonefishing';
import Layout from './components/layout';
import ErrorBoundary from './components/errorBoundary';

function App() {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogPost />} />
          <Route path='/project/:id' element={<ProjectDetail />} />
          <Route path='/animation/:id' element={<AnimationDetail />} />
          <Route path='/case-study/brannvrn' element={<BrannVRnCaseStudy />} />
          <Route path='/case-study/hobbyist' element={<HobbyistCaseStudy />} />
          <Route path='/case-study/gonefishing' element={<GoneFishingCaseStudy />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
