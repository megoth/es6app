import React from 'react';
import HelpButton from './HelpButton.jsx!';
import HelpUser from './HelpUser.jsx!';

class HelpQueue extends React.Component {
  render() {
    var users = this.props.users.map(function (user, index) {
      return <HelpUser key={index} user={user} />
    });
    return (
      <div>
        <h2>Help queue</h2>
        <ul>
          {users}
          <HelpButton onClick={this.props.handleUserInput}></HelpButton>
        </ul>
      </div>
    );
  }
}

export default HelpQueue;