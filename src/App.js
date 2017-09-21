import React, { Component } from 'react';
import './css/style.css';
import Project from './js/Project';
import Header from './js/Header';

class App extends Component {

  projects() {
    return (
      <div className="projects">

        <div className="row">
          <div className="col-sm-5">
            <Project title="Art From Light" href="https://art-from-light.herokuapp.com/">
              <p>
                A site where photographers can share their work.
              </p>
              <p>
                Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS. Photos are stored on <a href="http://cloudinary.com" target="_blank" rel="noopener noreferrer">Cloudinary</a>
                . <a href="https://github.com/mark1ad/art_from_light_frontend" target="_blank" rel="noopener noreferrer">Client GitHub repository</a> and <a href="https://github.com/mark1ad/art_from_light_api" target="_blank" rel="noopener noreferrer">Server GitHub respository</a>.
              </p>
            </ Project>
          </div>
          <div className="col-sm-7">
            <a href="https://art-from-light.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={require("./images/art-from-light.png")} alt="Art From Light Website"/>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <Project title="Open Highway" href="https://open-highway.herokuapp.com/">
              <p>
                Plan the ultimate roadtrip!
              </p>

              <p>
                Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS.
                <a href="https://github.com/mark1ad/roadtrip_app_frontend" target="_blank" rel="noopener noreferrer">Client GitHub respository</a> and <a href="https://github.com/mark1ad/roadtrip_app_api" target="_blank" rel="noopener noreferrer">Server GitHub respository</a>.
              </p>
            </Project>
          </div>
          <div className="col-sm-7">
            <a href="https://open-highway.herokuapp.com/"  target="_blank" rel="noopener noreferrer">
              <img src={require("./images/open-highway.png")} alt="Open Highway Website"/>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <Project title="Civilized Coffee" href="https://infinite-shelf-28534.herokuapp.com/">
              <p>
                Manage your own chain of coffee shops.
              </p>
              <p>
                Node.js, Mongoose, Mongo, Express, EJS and Bootstrap.
                <a href="https://github.com/mark1ad/coffeeshop" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
              </p>
            </Project>
          </div>
          <div className="col-sm-7">
            <a href="https://infinite-shelf-28534.herokuapp.com/"  target="_blank" rel="noopener noreferrer">
              <img src={require("./images/civilized-coffee.png")} alt="Open Highway Website"/>
            </a>
          </div>
        </div>

      </div>
  )

  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          { /* <div className="inner-container"> */ }

              <h2 className="projHead">Projects</h2>
            { this.projects() }

          { /* </div> */ }
        </div>
      </div>
    );
  }
}

export default App;
