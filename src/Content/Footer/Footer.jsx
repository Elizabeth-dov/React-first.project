import React from "react";
import styles from "./Footer.module.css"


export default function Footer () {
  return (
    <>
<section className={styles.footer}>
<ul className={styles.footer__content}>
    <li className={styles.footer__li}>
<h1>About my company</h1>
<p>ul. POLNJDD 9, LOK. 37</p>
<p>Poland 00-435</p>
<p>NIP: 47972039-</p>
<p>Tel: 32703234</p>
</li>
<li className={styles.footer__li}>
    <p>E-mail: inscm@fivoon.pl</p>
</li>
<li className={styles.footer__li}>
    <p>Working hour</p>
    <p>Mon-Tue</p>
    <p>9:00-20:00</p>
</li>
</ul>
<div className={styles.footerp}>
<p>Katowice, photo by Alice 2024</p>
</div>


</section>
    </>
  )
}