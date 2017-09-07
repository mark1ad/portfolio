import React, {Component} from 'react';
import './../css/Project.css';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="projlink">
          <a href={this.props.href} target="_blank">{this.props.title}</a>
        </div>
        <div className="desc">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Project;
