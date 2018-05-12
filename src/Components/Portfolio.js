import React from 'react';

import Project from './Project';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section container">
      <div className="section-inner">
        <h1>Recent Projects</h1>

        <div className="projects">
          <Project title="Art From Light"
            href="https://art-from-light.herokuapp.com/"
            src={require("../images/art-from-light.png")}
            alt="Art From Light Website">

            <p>
              Let your inner photographer out and share your work. Upload and organize your photos into collections.
            </p>
            <p>
              Visitors can view work by all photographers or visit a single photographer&lsquo;s page to see just their photos.
            </p>
            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS. Photos are stored on <a href="http://cloudinary.com" target="_blank" rel="noopener noreferrer">Cloudinary</a>
              . <a href="https://github.com/mark1ad/art_from_light_frontend" target="_blank" rel="noopener noreferrer">Client GitHub repository</a> and <a href="https://github.com/mark1ad/art_from_light_api" target="_blank" rel="noopener noreferrer">Server GitHub respository</a>.
            </p>
          </Project>

          <hr className="featurette-divider"/>

          <Project title="Open Highway"
            href="https://open-highway.herokuapp.com/"
            src={require("../images/open-highway.png")}
            alt="Open Highway Website"
            imgleft>

            <p>
              Want to visit all of the states? How about all the museums in your town? Open Highway lets you plan the ultimate road trip!
            </p>

            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS.
              <a href="https://github.com/mark1ad/roadtrip_app_frontend" target="_blank" rel="noopener noreferrer">Client GitHub respository</a> and <a href="https://github.com/mark1ad/roadtrip_app_api" target="_blank" rel="noopener noreferrer">Server GitHub respository</a>.
            </p>
          </Project>

          <hr className="featurette-divider"/>

          <Project title="Civilized Coffee"
            href="https://infinite-shelf-28534.herokuapp.com/"
            src={require("../images/civilized-coffee.png")}
            alt="Open Highway Website">

            <p>
              Become part of the Civilized Coffee chain and become the sophisticated owner of a coffee shop. Create your own specialized drinks. Schedule live music and other events.
            </p>
            <p>
              Node.js, Mongoose, Mongo, Express, EJS and Bootstrap. <a href="https://github.com/mark1ad/coffeeshop" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
            </p>
          </Project>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
