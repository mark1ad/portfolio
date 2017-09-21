import React, {Component} from 'react';

class Project extends Component {
  render() {
    return (
      <div>
        <div className="projLink">
          <a href={this.props.href} target="_blank">{this.props.title}</a>
        </div>
        <div className="projDesc">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Project;
