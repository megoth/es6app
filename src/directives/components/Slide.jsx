import React from 'react';

var Slide = React.createClass({
  render: function () {
    return (
      <li className={this.props.slide.active ? 'active': ''} key={this.props.key}>
        <a href={this.props.slide.url}>{this.props.slide.short}</a>
      </li>
    );
  }
});

export default Slide;