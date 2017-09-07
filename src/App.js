import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  header() {
    return <div className="header">Mark De May</div>
  }

  menu() {
    return (
      <div id="menu">
        <div className="menulink">
          <a href="resume.pdf" target="_blank">Resume</a>
        </div>

        <div className="menulink">
          <a href="https://www.linkedin.com/in/markdemay/" target="_blank">LinkedIn</a>
        </div>

        <div className="menulink">
          <a href="https://github.com/mark1ad" target="_blank">GitHub</a>
        </div>
      </div>
    )
  }

  projects() {
    return (
    <div className="projects">
      <div className="inner-projects">

        <div className="project">
          <div className="projlink">
            <a href="https://art-from-light.herokuapp.com/" target="_blank">Art From Light</a>
          </div>

          <div className="desc">
            A site where photographers can share their work.
            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS. Photos are stored on <a href="cloudinary.com" target="_blank">Cloudinary</a>.
              <a href="https://github.com/mark1ad/art_from_light_frontend" target="_blank">Client GitHub repository</a> and <a href="https://github.com/mark1ad/art_from_light_api" target="_blank">Server GitHub respository</a>.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projlink">
            <a href="https://open-highway.herokuapp.com/"  target="_blank">Open Highway</a>
          </div>

          <div className="desc">
            Plan the ultimate roadtrip!

            <p>
              Ruby on Rails, postgresql, AngularJS, Express.js, JavaScript, Postgresql and CSS/SASS.
              <a href="https://github.com/mark1ad/roadtrip_app_frontend" target="_blank">Client GitHub respository</a> and <a href="https://github.com/mark1ad/roadtrip_app_api" target="_blank">Server GitHub respository</a>.
            </p>
          </div>
        </div>

                  <div className="project">
                    <div className="projlink">
                      <a href="https://infinite-shelf-28534.herokuapp.com/"  target="_blank">Civilized Coffee</a>
                    </div>

                    <div className="desc">
                      Manage your own chain of coffee shops.
                      <p>
                        Node.js, Mongoose, Mongo, Express, EJS and Bootstrap.
                        <a href="https://github.com/mark1ad/coffeeshop" target="_blank">GitHub repository</a>.
                      </p>
                    </div>
                  </div>

                </div>
              </div>)

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="inner-container">
            {this.header()}
            {this.menu()}

            <div className="desc">
              During my career as a software engineer I&rsquo;ve worked on projects for IC layout design, GIS applications for utility companies, and full stack web development. My skills include Ruby on Rails, JavaScript, SQL, CSS/SASS, HTML5, AngularJS, C#, and .Net.
            </div>

            <div className="projhead">
              Projects
            </div>

            {this.projects()}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
