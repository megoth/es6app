import React from 'react';

var Slide = React.createClass({
  render: function () {
    return (
      <li key={this.props.key}>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    );
  }
});

export default Slide;