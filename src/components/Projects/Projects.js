import React from 'react';
import './Projects.css';
import homeMovies from '../../assets/home-movies.png';
import library from '../../assets/library.png';
import bordle from '../../assets/bordle.png';

function Projects() {
  return (
    <>
      <div id='projects' className='projects-wrap'>
        <h1 className='section-title section__heading'>Things I've done</h1>
        <div className='projects-container'>
          <div className='project-content'>
            <div className='project-image-container'>
              <a href='https://homemovies.mdisanto.me'>
                <img src={homeMovies} alt='project' />
              </a>
            </div>
            <h2 className='project-title'>Home Movie Catalog</h2>
            <p className='project-desc'>A searchable database of home movies</p>
          </div>
          <div className='project-content'>
            <div className='project-image-container'>
              <a href='https://library.mdisanto.me'>
                <img src={library} alt='project' />
              </a>
            </div>
            <h2 className='project-title'>Library App</h2>
            <p className='project-desc'>App for tracking books</p>
          </div>
          <div className='project-content'>
            <div className='project-image-container'>
              <a href='https://github.com/verybag/bordle'>
                <img src={bordle} alt='project' />
              </a>
            </div>
            <h2 className='project-title'>Bordle</h2>
            <p className='project-desc'>
              Clone of the popular word game "Wordle"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
