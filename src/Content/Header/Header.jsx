import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Header.module.css'
import instagram from "../../../public/instagram.svg";
import facebook from "../../../public/facebook.svg";
import { Tab, Tabs } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTime from "./HeaderTime";

export default function Header () {
    const navigate = useNavigate ()

    const handleSelect = (key) => {
        if (key === "portfolio") {
            navigate("/portfolio");
        } else if (key === "blog") {
            navigate("/blog");
        } else if (key === "contact") {
            navigate("/contact")
        } else if (key === "home") {
            navigate("/AppContent")
        }
    };
    return (
<section className={styles.header}>
<Tabs defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={handleSelect}
>
<Tab eventKey="home" title="Home">
       
       </Tab>  
<Tab eventKey="portfolio" title="Portfolio">
        
      </Tab>
      <Tab eventKey="blog" title="Blog">
      
      </Tab>
      <Tab eventKey="contact" title="Contact">
       
      </Tab>   
     
</Tabs>
<div className={styles.socialIcons}>
               <a href="#"> 
                <img src={instagram} alt="Instagram" className={styles.icon} />
                </a>
<a href="#">
    <img src={facebook} alt="Facebook" className={styles.icon} />
    </a> 
    <HeaderTime />
            </div>
</section>
    )
}