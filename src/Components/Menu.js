import React from 'react';

const Menu = (props) => {
  let navClasses = "menu navbar navbar-expand";
  let ulClasses = "navbar-nav";
  let divClasses = "collapse navbar-collapse justify-content-center";
    // justify-content-md-center";

  // if (props.fullmenu) {
    // navClasses += " navbar-expand";
    // ulClasses += " navbar-lg";
    // divClasses += " justify-content-md-center";
  // }
  // else {
  //   navClasses += " navbar-dark";
  //   ulClasses += " navbar-sm";
  // }

  return (
    <nav className={navClasses}>
      <div className={divClasses} id="menuID">
        <ul className={ulClasses}>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/markdemay/"
            target="_blank"  rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/mark1ad"
            target="_blank"  rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="mailto:mark@markdemay.com">Email</a>
          </li>
          { /* <li className="nav-item">
            <a className="nav-link" href="/src/media/resume.pdf">Resume</a>
          </li> */ }

        </ul>
      </div>
    </nav>
  )
}

export default Menu;
