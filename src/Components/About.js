import React from 'react';
import Skill from './Skill';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container inner-section">
        <h1>About Me</h1>
        <p>During my career as a software engineer I’ve worked on projects for IC layout design automation, GIS applications for utility companies, and full stack web development. My skills include Ruby on Rails, JavaScript, SQL, CSS/SASS, HTML5, AngularJS, C#, and .Net.</p>

        <div className="container-fluid">
          <div className="row">
            <Skill name="Ruby on Rails" icon="devicon-rails-plain" />
            <Skill name="React" icon="devicon-react-plain" />
            <Skill name="AngularJS" icon="devicon-angularjs-plain" />
            <Skill name="HTML5" icon="devicon-html5-plain" />
            <Skill name="CSS3" icon="devicon-css3-plain" />
            <Skill name="SASS" icon="devicon-sass-plain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
