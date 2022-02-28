import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className='header-bg'>
      <div className='header-container' id='header'>
        <div className='header-content'>
          <h1 className='header-name'>Michael</h1>
          <h1 className='header-name'>DiSanto</h1>
          <p
            className={`${hover ? 'heartbeat' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Developer. Designer. Director.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
