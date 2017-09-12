import React from 'react';

const Header = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Mark De May</h1>

        <p className="lead">
          Full Stack Web Developer
        </p>

        <p className="desc">
          During my career as a software engineer I&rsquo;ve worked on projects for IC layout design, GIS applications for utility companies, and full stack web development. My skills include Ruby on Rails, JavaScript, SQL, CSS/SASS, HTML5, AngularJS, C#, and .Net.
        </p>
      </div>

      <nav className="navbar navbar-expand">

        <div className="navbar-collapse justify-content-md-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/markdemay/">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/mark1ad">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/src/media/resume.pdf">Resume</a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header;
