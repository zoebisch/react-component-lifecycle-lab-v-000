import Highcharts from 'highcharts';

let chart = null;

export const initialize = () => {
  if(typeof(Highcharts) === 'undefined') return;

  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'container'
    },

    title: {
      text: 'Tweets over time'
    },

    xAxis: {
      categories: [0]
    },

    series: [{
      name: 'Number of tweets',
      data: [0]
    }]
  });
}

export const update = (numTweets) => {
  if(typeof(Highcharts) === 'undefined') return;

  const shift = chart.series[0].data.length > 10;
  chart.series[0].addPoint({
    y: numTweets
  }, true, shift);
}

