import React from 'react';
import Slide from './Slide.jsx!';

var Index = React.createClass({
  render: function () {
    var slides = this.props.states.map(function (state, index) {
      return <Slide key={index} url={'#'+state.url} title={state.data.title} />;
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