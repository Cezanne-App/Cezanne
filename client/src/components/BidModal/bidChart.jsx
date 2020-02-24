import React, { useEffect } from 'react';
import ChartList from 'chartist';

const BiddingChart = ({ bids }) => {
  const data = {
    labels: [bids.dates],
    series: [bids.values],
  };

  const options = {
    // Don't draw the line chart points
    showPoint: true,
    lineSmooth: true,
    showArea: false,
    showGridBackground: false,
    axisX: {
      showGrid: false,
      showLabel: false,
    },
    // Y-Axis specific configuration
    axisY: {
      // Lets offset the chart a bit from the labels
      offset: 60,
      labelInterpolationFnc(value) {
        return `$${value}`;
      },
    },
  };

  new ChartList.Line('.ct-chart', data, options);
  return <div className="ct-chart" />;
};

export default BiddingChart;
