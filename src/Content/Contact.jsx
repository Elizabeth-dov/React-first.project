
import React from 'react';
import { useState } from 'react';
import styles from './Contact.module.css'
import { Container } from 'react-bootstrap';


export default function Contact () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
    // Функція для обробки відправлення форми
    const handleSubmit = (event) => {
      console.log('Ім\'я:', firstName);
      console.log('Прізвище:', lastName);
      console.log('Email:', email);
    }
  
    return (
<Container>

      <section className={styles.contact__content}>
<div className={styles.contact}>
  <h1>Leave your contacts and I will definitely contact you</h1>
  <p>Hey there, this could be the beginning of something extraordinary!

I have a deep passion for photography, and knowing that my images resonate with others is the greatest honor I could receive.

Whether you want to share your life’s journey, craft meaningful content for your stunning brands, or seek support in your creative endeavors, I would be thrilled to be a part of your adventure.

Shall we embark on this journey together? Let’s unveil your narrative.</p>
</div>



      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.content}>
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Оновлюємо стан при введенні
          />
        </div>
  
        <div className={styles.content}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
  
        <div className={styles.content}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <button type="submit">Submit</button>
      </form>
      </section>
      </Container>
    )
  }

  
