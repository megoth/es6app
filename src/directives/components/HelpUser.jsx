import React from 'react';

class HelpUser extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        {this.props.user.username} ({this.props.user.progress})
      </li>
    );
  }
}

export default HelpUser;