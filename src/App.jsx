
import './App.css';
import './index.css';
import AppContent from "./Content/AppContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from './Content/Header/Header';
import Blog from "./Content/Blog"
import Portfolio from './Content/Portfolio';
import Contact from './Content/Contact';
import Footer from './Content/Footer/Footer';
import MoreAboutBlog from './Content/MoreAboutBlog';

export default function App() {
 
  return (

    <Router>
      <Header />
      <Routes>
       
        <Route path="*" element={<AppContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/moreAboutBlog" element={<><MoreAboutBlog /></>} />
      </Routes>
  <Footer />
    </Router>
  )
}



