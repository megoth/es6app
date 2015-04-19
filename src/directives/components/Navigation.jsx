import React from 'react';

class Navigation extends React.Component {
  render() {
    var back;
    if (this.props.previous) {
      back = <a href={this.props.previous.url} rel="prev">
        Previous: {this.props.previous.title}
      </a>;
    }
    var next;
    if (this.props.next) {
      next = <a href={this.props.next.url} rel="next">
        Next: {this.props.next.title}
      </a>;
    }
    return (
      <nav>
        {back}
        {next}
      </nav>
    );
  }
}

export default Navigation;