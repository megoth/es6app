import React from 'react';

var Progress = React.createClass({
  render: function () {
    var slides = this.props.slides;
    var steps = this.props.steps.map(function (number, index) {
      return number ? <li key={index}>Slide {slides[index].step} ({number})</li> : null;
    });
    return (
      <div>
        <h2>Progress</h2>
        <ul>
          {steps}
        </ul>
      </div>
    );
  }
});

export default Progress;