import React from 'react';

var HelpQueue = React.createClass({
  handleClick: function (event) {
    if(!this.username) {
      this.username = prompt('Please enter a username');
    }
  },
  render: function () {
    return (
      <form>
        <button onClick={this.handleClick} type="button">I need help!</button>
      </form>
    );
  }
});

export default HelpQueue;