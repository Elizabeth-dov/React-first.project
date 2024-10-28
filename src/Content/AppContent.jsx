import '../App.css';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Portfolio from './Portfolio';
import Contact from './Contact';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./firstpage.module.css";
import instagram from "../../public/instagram.svg";
import facebook from "../../public/facebook.svg";
import { Link } from "react-router-dom"
import { useSpring, animated } from '@react-spring/web'



export default function AppContent() {

  const animationStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 } 
  });

  return (
    <animated.div style={animationStyles}>
    <section className={styles.firstpage}>
      <Container>
         <div className={styles.firstContent}>
       
          <h1>Immpression by Allise</h1>
          <p>Photographer from Katowice</p>
          
          </div>
        <div className={styles.first_menu}>
          <ul className={styles.menu}>
          <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className={styles.menuMedia}>
            <li><a href=''><img src={instagram} alt="Instagram" /></a></li>
            <li><a href=''><img src={facebook} alt="Facebook" /></a></li>
          </ul>
          </div>
      <Routes> 
        <Route path="/blog" element={<><Blog /></>} />
        <Route path="/portfolio" element={<><Portfolio /></>} />
        <Route path="/contact" element={<><Contact /></>} />
       
      </Routes>
    </Container>
   </section>
   </animated.div>
  );
}


