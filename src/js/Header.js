import React from 'react';

import Menu from './Menu';

const Header = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="">Mark De May</h1>

        <p className="lead">
          Full Stack Web Developer
        </p>

        <p className="desc">
          During my career as a software engineer I&rsquo;ve worked on projects for IC layout design, GIS applications for utility companies, and full stack web development. My skills include Ruby on Rails, JavaScript, SQL, CSS/SASS, HTML5, AngularJS, C#, and .Net.
        </p>
      </div>

      <Menu />
    </div>
  )
}

export default Header;
