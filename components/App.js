const React = require('react');
const TweetWall = require('./TweetWall');
const isAfter = require('date-fns/is_after');
const addSeconds = require('date-fns/add_seconds');

const { getTweets } = require('../data/mockAPI');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      latestTweets: []
    };
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  // TODO: componentWillMount() 

  // TODO: componentDidMount() 

  // TODO: componentWillUnmount()

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}

module.exports = App;
