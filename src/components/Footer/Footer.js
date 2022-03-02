import React from 'react';
import './Footer.css';
import { BsGithub, BsMailbox, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div id='contact' className='footer-container'>
      <h1
        className='footer-title section__heading'
        style={{ fontSize: '2.5rem', letterSpacing: '0' }}
      >
        Reach out & Connect
      </h1>
      <div className='footer-content'>
        <p className='icon'>
          <a href='https://github.com/verybag' alt='github'>
            <BsGithub
              style={{ color: '#fff' }}
              size={85}
              className='icon-image'
            />
          </a>
        </p>
        <p className='icon'>
          <a
            href='https://www.linkedin.com/in/michael-disanto000/'
            alt='linkedin'
          >
            <BsLinkedin
              style={{ color: '#fff' }}
              size={85}
              className='icon-image'
            />
          </a>
        </p>
        <p className='icon'>
          <a href='mailto:michael.john.disanto@gmail.com' alt='email'>
            <BsMailbox
              style={{ color: '#fff' }}
              size={85}
              className='icon-image'
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
