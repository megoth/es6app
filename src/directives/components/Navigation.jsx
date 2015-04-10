import React from 'react';

var Navigation = React.createClass({
  render: function () {
    var back;
    if (this.props.previousState) {
      back = <a href={'#'+this.props.previousState.url} rel="prev">
        Previous: {this.props.previousState.data.title}
      </a>;
    }
    var next;
    if (this.props.nextState) {
      next = <a href={'#'+this.props.nextState.url} rel="next">
        Next: {this.props.nextState.data.title}
      </a>;
    }
    return (
      <nav>
        {back}
        {next}
      </nav>
    );
  }
});

export default Navigation;