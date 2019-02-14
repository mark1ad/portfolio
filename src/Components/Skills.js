import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container section-inner about-inner">
        <h1>Skills</h1>
        
        <div className="container-fluid">
          <div className="row">
            <Skill name="Ruby on Rails" icon="devicon-rails-plain" />
            <Skill name="React" icon="devicon-react-plain" />
            <Skill name="AngularJS" icon="devicon-angularjs-plain" />
            <Skill name="JavaScript ES6" icon="devicon-javascript-plain" />
            <Skill name="Bootstrap" icon="devicon-bootstrap-plain" />
            <Skill name="HTML5" icon="devicon-html5-plain" />
            <Skill name="CSS3" icon="devicon-css3-plain" />
            <Skill name="SASS" icon="devicon-sass-plain" />
            <Skill name="PostgreSQL" icon="devicon-postgresql-plain" />
            <Skill name="WordPress" icon="devicon-wordpress-plain" />
            <Skill name="Git/GitHub" icon="devicon-github-plain" />
            <Skill name="C/C++/C#" icon="devicon-csharp-plain" />
            <Skill name=".Net" icon="devicon-dot-net-plain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
