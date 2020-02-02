import React, { useState, useEffect } from 'react';
import ChartList from 'chartist';

const BiddingChart = () => {
  const [bids, setBids] = useState([]);
  const [labels, setLabels] = useState([]);

  var data = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
    series: [
      [0, 15, 2, 7, 7]
    ]
  };

  var options = {
    // Don't draw the line chart points
    showPoint: true,
    lineSmooth: true,
    showArea: false,
    showGridBackground: false,
    axisX: {
      showGrid: false,
      showLabel: false
    },
    // Y-Axis specific configuration
    axisY: {
      // Lets offset the chart a bit from the labels
      offset: 60,
      labelInterpolationFnc: function(value) {
        return '$' + value;
      }
    }
  };

  useEffect(() => {
    const x = new ChartList.Line('.ct-chart', data, options)
  });

  return (
    <div className='ct-chart'></div>
  );
};

export default BiddingChart;