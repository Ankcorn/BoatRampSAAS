import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Interface } from 'readline';

const data1 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
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
      <Doughnut data={data1} />
    </div>
  )
}

export default DougnutChart;