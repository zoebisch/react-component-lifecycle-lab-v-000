# React Component Lifecycle Lab

## Objectives

1. Practice rendering React components, making use of the different parts of
   the component lifecycle
2. Build a small React application

## Overview

In this lab, we're going to build our very own application - a dashboard which shows us tweets from Twitter
based on a particular keyword in real time. The real twitter API requires authentication which is quite complex
and out of the scope of this course (feel free to read more about it [here](https://dev.twitter.com/oauth)).
Thus, we will be using fake data from a mock API - that is, we will hardcode some past tweets an pretend
the data is coming from the real Twitter API. Not to worry, this is a common practice in software engineering,
especially at the early stages of a project or for testing.

1. The `<App />` component is our root component and is responsible for fetching the data and passing it through
to the Tweet wall and our charting library. As you can see, there is a function `fetchTweets()` which handles
fetching the new lot of tweets and updating the state. Only it's never called! Lets fix that. Use the
`componentWillMount()` lifecycle method to call `fetchTweets()`.

2. This is all well and good, but nothing is being printed out to the screen still. Open `<TweetWall />` and
investigate. As you can see, `<TweetWall />` is expecting the tweets to be accessible from `this.state`, but
they are being passed down as `newTweets` from the props. Use `componentWillMount()` to set `this.state.tweets`
to be `this.props.newTweets`.

3. If you've done parts 1. and 2. correctly, you should now see some tweets in the browser when you load
the app. Great! However, we'd like out tweet wall to update every few seconds and display us more tweets.
In order to do that, we have to set up an intercal to call our fake API every few seconds. Open up `<App />`
again and observe that `startInterval()` and `cleanUpInterval()` already exist. They're just not used.
Use the `componentDidMount()` and `componentWillUnmount()` lifecycle hooks to start the interval when
the component is mounted and to clean it up when the component is unmounted.

4. Now, even though you've fetching new tweets using the interval, they are still not being displayed. This
is because `newTweets` are being passed down as a prop to `<TweetWall />`, but the `render()` function
is only reading the tweets from the state. In order to fix this, use the `componentWillReceiveProps()` method
to update the state to combine `nextProps.newTweets` and `this.state.tweets`. Don't forget that new tweets
should go to the beginning of your array as you want to see the new tweets at the top of the page, not
at the bottom!

5. Our Tweet wall is starting to look pretty good! There's just a little inefficiency we need to tidy up:
Occasionally, an api call returns no new tweets, however our `<TweetWall />` component will still rerender
unnecessarily. We can fix that easily using `shouldComponentUpdate()`. Use this lifecycle method in
`<TweetWall />` to only rerender the component if there are more than 0 new tweets.

## Resources

- [React: Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
