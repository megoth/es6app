import React from 'react';
import HelpButton from './HelpButton.jsx!';
import HelpUser from './HelpUser.jsx!';
import HelpQueueService from '../../services/helpQueue.service';

var HelpQueue = React.createClass({
  render: function () {
    var users = this.props.users.map(function (user, index) {
      return <HelpUser key={index} user={user} />
    });
    return (
      <div>
        <h2>Help queue</h2>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
});

export default HelpQueue;