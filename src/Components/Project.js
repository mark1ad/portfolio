import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render(props) {
    let textDiv = "col-md-5";
    let imgDiv = "projImageDiv col-md-7";
    if (this.props.imgleft) {
      textDiv += " order-md-2";
      imgDiv += " order-md-1";
    }

    return (
      <div className='row featurette'>
        <div className={textDiv}>
          <div className="projLink">
            <a href={this.props.href} target="_blank"  rel="noopener noreferrer">{this.props.title}</a>
          </div>

          <div className="projDesc">
            {this.props.children}
          </div>
        </div>

        <div className={imgDiv}>
          <a href={this.props.href} target="_blank"  rel="noopener noreferrer">
            <img className="projImage" src={this.props.src} alt={this.props.alt}/>
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
