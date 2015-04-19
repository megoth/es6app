import React from 'react';

class ProgressItem extends React.Component {
  render() {
    return (
      <li key={this.props.key}>Slide {this.props.step} ({this.props.number})</li>
    );
  }
}

export default ProgressItem;