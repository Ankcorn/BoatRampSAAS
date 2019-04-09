import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export interface PiChartData {
  labels: string[],
  datasets: [{
    data: number[],
    backgroundColor: string[],
  }]
};

interface Props {
  data: any
}

const DougnutChart: React.FunctionComponent<Props> = ({ data }) => {
  console.log(data)
  return (
    <div className="rounded shadow-lg bg-gray-400">
      <h1 className="text-sm">Ramps By Type</h1>
      <Doughnut data={data} />
    </div>
  )
}

export default DougnutChart;