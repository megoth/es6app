import React from 'react';

var HelpUser = React.createClass({
  render: function () {
    return (
      <li key={this.props.key}>
        {this.props.user.username} ({this.props.user.step})
      </li>
    );
  }
});

export default HelpUser;