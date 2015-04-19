import React from 'react';
import ProgressItem from './ProgressItem.jsx!';

class Progress extends React.Component {
  render() {
    var slides = this.props.slides;
    var steps = this.props.steps.map(function (number, index) {
      return number 
        ? <ProgressItem key={index} step={slides[index].step} number={number} />
        : null;
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
}

export default Progress;