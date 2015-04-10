import React from 'react';
import Slide from './Slide.jsx!';

var Index = React.createClass({
  render: function () {
    var slides = this.props.slides.map(function (slide, index) {
      return <Slide key={index} slide={slide} />;
    });
    return (
      <nav>
        <h2>Index</h2>
        <ul>
          {slides}
        </ul>
      </nav>
    );
  }
});

export default Index;