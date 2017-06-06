import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';
import { initialize, update } from '../lib/chart';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      latestTweets: []
    };
    initialize();
  }

  // TODO: componentWillMount()

  // TODO: componentDidMount()

  // TODO: componentWillUnmount()

  // TODO: componentDidUpdate()

  updateChart = numTweets => update(numTweets);

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
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

export default App;
