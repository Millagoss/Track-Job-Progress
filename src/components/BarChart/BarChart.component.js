import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function BarChartComp({ data }) {
  const highestValue = data.reduce((total, current) => {
    if (current.count > total) {
      return current.count;
    }
    return total;
  }, 0);

  useLayoutEffect(() => {
    let root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: highestValue + 1,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.set(
      'numberFormatter',
      am5.NumberFormatter.new(root, {
        numberFormat: '.',
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: 'date',
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'count',
        categoryXField: 'date',
        sequencedInterpolation: true,
        sequencedDelay: 300,
      })
    );
    series1.appear();
    series1.data.setAll(data);

    // Add cursor
    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id='chartdiv'
      className='chart add-chart-border'
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
}
export default BarChartComp;
