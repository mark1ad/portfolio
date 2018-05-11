import React, { Component } from 'react';
import './css/style.css';
import Home from './Components/Home';
import Project from './Components/Project';
import Header from './Components/Header';

class App extends Component {

  projects() {
    return (
      <div className="projects">

        <hr className="featurette-divider"/>

        <Project title="Art From Light"
          href="https://art-from-light.herokuapp.com/"
          src={require("./images/art-from-light.png")}
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
        </ Project>

        <hr className="featurette-divider"/>

        <Project title="Open Highway"
          href="https://open-highway.herokuapp.com/"
          src={require("./images/open-highway.png")}
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
          src={require("./images/civilized-coffee.png")}
          alt="Open Highway Website">

          <p>
            Become part of the Civilized Coffee chain and become the sophisticated owner of a coffee shop. Create your own specialized drinks. Schedule live music and other events.
          </p>
          <p>
            Node.js, Mongoose, Mongo, Express, EJS and Bootstrap. <a href="https://github.com/mark1ad/coffeeshop" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
          </p>
        </Project>
      </div>
    )
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <Home/>

        <main>
          <h2 className="projHead">Projects</h2>
          { this.projects() }
        </main>

        <footer>
          <p>
            &copy; 2017 Mark De May <a href="https://www.linkedin.com/in/markdemay/"
            target="_blank"  rel="noopener noreferrer">
              <img src={require("./images/In-2C-21px-R.png")} alt=""/>
            </a> <a href="https://github.com/mark1ad"
            target="_blank"  rel="noopener noreferrer">
              <img src={require("./images/GitHub-Mark-Light-32px.png")} alt=""/>
            </a> <a href="mailto:mark@markdemay.com"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require("./images/if_mail_2581816.png")}
                  alt=""/>
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
