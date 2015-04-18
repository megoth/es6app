import React from 'react';

var HelpQueue = React.createClass({
  handleClick: function (event) {
    if(!this.username) {
      this.username = prompt('Please enter a username');
    }
    this.isAskingForHelp = !this.isAskingForHelp;
    this.props.onClick(this.username, this.isAskingForHelp);
  },
  render: function () {
    var buttonText = this.isAskingForHelp ? 'I\'m good' : 'I need help';
    return (
      <form>
        <button onClick={this.handleClick} type="button">
          {buttonText}
        </button>
      </form>
    );
  }
});

export default HelpQueue;