import React from 'react';
import Slide from './Slide.jsx!';

class Index extends React.Component {
  render() {
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
}

export default Index;