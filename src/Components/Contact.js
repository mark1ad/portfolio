import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container section-inner">
        <h1>Contact Me</h1>

        <p>
          <a href="mailto:mark@markdemay.com"
              target="_blank"
              rel="noopener noreferrer">
            <img src={require("../images/if_mail_2581816.png")}
                alt=""/>
          </a> <a href="https://www.linkedin.com/in/markdemay/"
          target="_blank"  rel="noopener noreferrer">
            <img src={require("../images/In-2C-21px-R.png")} alt=""/>
          </a> <a href="https://github.com/mark1ad"
          target="_blank"  rel="noopener noreferrer">
            <img src={require("../images/GitHub-Mark-32px.png")} alt=""/>
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact;
