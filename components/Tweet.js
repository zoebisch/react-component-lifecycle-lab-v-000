const React = require('react');

class Tweet extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

module.exports = Tweet;
