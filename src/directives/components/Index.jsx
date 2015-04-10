import React from 'react';
import Slide from './Slide.jsx!';

var Index = React.createClass({
  render: function () {
    var slides = this.props.states.map(function (state, index) {
      return <Slide key={index} url={state.stateUrl} title={state.data.title} />;
    });
    return (
      <div>
        <h2>Index</h2>
        <ul>
          {slides}
        </ul>
      </div>
    );
  }
});

export default Index;