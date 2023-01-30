import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PieChartComp from '../PieChart/PieChart.component';
import BarChartComp from '../BarChart/BarChart.component';

import ChartContainerWrapper from './ChartsContainer.style';
import Loading from '../Loading/Loading.component';

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  const { isLoading } = useSelector((store) => store.allJobs);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChartContainerWrapper>
      <h4>Monthly Applications</h4>
      <button
        type='button'
        className={barChart ? 'no-b-border chart-btn' : 'chart-btn'}
        onClick={() => setBarChart(!barChart)}
      >
        Bar Chart
      </button>
      <button
        type='button'
        className={!barChart ? 'no-b-border chart-btn' : 'chart-btn'}
        onClick={() => setBarChart(!barChart)}
      >
        Pie Chart
      </button>

      {barChart ? <BarChartComp data={data} /> : <PieChartComp data={data} />}
    </ChartContainerWrapper>
  );
};

export default ChartContainer;
