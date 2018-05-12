import React, { Component } from 'react';
import './css/style.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>

        <Home/>

        <main>
          <About />
          <Portfolio />
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
