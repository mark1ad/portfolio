import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-5">
          <div className="projLink">
            <a href={this.props.href} target="_blank"  rel="noopener noreferrer">{this.props.title}</a>
          </div>

          <div className="projDesc">
            {this.props.children}
          </div>
        </div>

        <div className="col-md-7">
          <a href={this.props.href} target="_blank"  rel="noopener noreferrer">
            <img src={this.props.src} alt={this.props.alt}/>
          </a>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Project;
