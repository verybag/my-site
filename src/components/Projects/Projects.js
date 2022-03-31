import React, { useState } from 'react';
import './Projects.css';
import homeMovies from '../../assets/home-movies.png';
import library from '../../assets/library.png';
import bordle from '../../assets/bordle.png';
import superhuman from '../../assets/superhuman.png';
import woofpack from '../../assets/woofpack.png';
import bvf from '../../assets/branchvalleyfarm.png';

function Projects() {
  const [showSuperHuman, setShowSuperHuman] = useState(false);

  const [showWoofPack, setShowWoofPack] = useState(false);
  const [showBVF, setShowBVF] = useState(false);
  return (
    <>
      <div id='projects' className='projects-wrap'>
        <h1 className='section-title section__heading'>Things I've done</h1>
        <div className='projects-container'>
          <div
            className='project-content'
            onClick={() => setShowSuperHuman(!showSuperHuman)}
          >
            <a href='#shdetails'>
              <div className='project-image-container'>
                <img src={superhuman} alt='project' />
              </div>
            </a>
            <h2 className='project-title' id='shdetails'>
              SUPER HUMAN
            </h2>
            <p className='project-desc'>Product Design</p>
            <div className={`details ${showSuperHuman ? 'visible' : ''}`}>
              <p className='project-details'>
                SUPER HUMAN is a product design case study. I created a
                harmonized design through consistent typography, logo creation,
                and color design.
              </p>
              <a href='#projects'>
                <img src={superhuman} alt='' />
              </a>
            </div>
          </div>
          <div
            className='project-content'
            onClick={() => setShowWoofPack(!showWoofPack)}
          >
            <a href='#woofdetails'>
              <div className='project-image-container' id='woofpack'>
                <img src={woofpack} alt='graphic design case study' />
              </div>
            </a>
            <h2 className='project-title' id='woofdetails'>
              woofpack
            </h2>
            <p className='project-desc'>Packaging and Product Design</p>
            <div className={`details ${showWoofPack ? 'visible' : ''}`}>
              <p className='project-details'>
                The design for woofpack is my take on a dog toy subscription box
                (a la barkbox). I took an existing product, and created an
                entirely new and fresh brand identity & logo.
              </p>
              <a href='#woofpack'>
                <img src={woofpack} alt='' />
              </a>
            </div>
          </div>

          <div className='project-content' onClick={() => setShowBVF(!showBVF)}>
            <a href='#bvfdetails'>
              <div className='project-image-container' id='bvf'>
                <img src={bvf} alt='Client Website Design' />
              </div>
            </a>
            <h2 className='project-title' id='bvfdetails'>
              Branch Valley Farm
            </h2>
            <p className='project-desc'>Client Website Design</p>
            <div className={`details ${showBVF ? 'visible' : ''}`}>
              <p className='project-details'>
                Branch Valley Farm is a local dairy goat farm and apiary. The
                design is responsive across all screen sizes, follows a cohesive
                color scheme, and accomplishes all of their primary business
                goals.
              </p>
              <a href='#bvf'>
                <img src={bvf} alt='' />
              </a>
            </div>
          </div>

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
