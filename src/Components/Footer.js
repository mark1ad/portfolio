import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2018 Mark De May <a href="https://www.linkedin.com/in/markdemay/"
        target="_blank"  rel="noopener noreferrer">
          <img src={require("../images/In-2C-21px-R.png")} alt=""/>
        </a> <a href="https://github.com/mark1ad"
        target="_blank"  rel="noopener noreferrer">
          <img src={require("../images/GitHub-Mark-Light-32px.png")} alt=""/>
        </a> <a href="mailto:mark@markdemay.com"
            target="_blank"
            rel="noopener noreferrer">
          <img src={require("../images/if_mail_2581816.png")}
              alt=""/>
        </a>
      </p>
    </footer>

  )
}

export default Footer;
