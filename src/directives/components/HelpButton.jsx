import React from 'react';

class HelpButton extends React.Component {
  handleClick() {
    this.username = this.getUsername();
    if (!this.username || this.username === '') {
      return;
    }
    this.isAskingForHelp = !this.isAskingForHelp;
    this.props.onClick(this.username, this.isAskingForHelp);
  }

  getUsername() {
    return this.username || prompt('Please enter a username');
  }

  render() {
    var buttonText = this.isAskingForHelp ? 'I\'m good' : 'I need help';
    return (
      <form>
        <button onClick={this.handleClick.bind(this)} type="button">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default HelpButton;