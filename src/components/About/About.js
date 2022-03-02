import React from 'react';
import './About.css';
import me from '../../assets/me.png';

function About() {
  return (
    <div className='about-container' id='about'>
      <h1 className='section-title section__heading'>Who I Am</h1>
      <div className='about-content'>
        <img src={me} alt='me' className='me-img' />
        <p style={{ textAlign: 'left', padding: '1rem', maxWidth: '300px' }}>
          In my career and personal life I believe the pursuit of knowledge is
          the key to success. Adaptability, flexibility, and attention to detail
          are at the forefront. A strong sense of self and accountability will
          always illuminate the path forward.
        </p>
        <p style={{ textAlign: 'left', padding: '1rem', maxWidth: '300px' }}>
          My years working in live television have instilled in me a desire for
          constant improvement and mastery of my craft. My passion for learning
          combined with the endless world of web development present me with
          infinite possibilities and solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
