import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5Percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function PieChartComp({ data }) {
  useLayoutEffect(() => {
    let root = am5.Root.new('chartPieDiv');
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5Percent.PieChart.new(root, {}));
    let series = chart.series.push(
      am5Percent.PieSeries.new(root, {
        name: 'Series',
        valueField: 'count',
        categoryField: 'date',
        sequencedInterpolation: true,
        sequencedDelay: 300,
      })
    );

    series.appear();

    series.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id='chartPieDiv'
      className='chart  add-chart-border'
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
}

export default PieChartComp;
