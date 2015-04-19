import React from 'react';

class Slide extends React.Component {
  render() {
    return (
      <li className={this.props.slide.active ? 'active': ''} 
          key={this.props.key}>
        <a href={this.props.slide.url}>{this.props.slide.short}</a>
      </li>
    );
  }
}

export default Slide;