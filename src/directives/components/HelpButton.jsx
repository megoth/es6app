import React from 'react';

var HelpQueue = React.createClass({
  handleClick: function (event) {
    this.username = this.getUsername();
    if (!this.username || this.username === '') {
      return;
    }
    this.isAskingForHelp = !this.isAskingForHelp;
    this.props.onClick(this.username, this.isAskingForHelp);
  },
  getUsername: function () {
    return this.username || prompt('Please enter a username');
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