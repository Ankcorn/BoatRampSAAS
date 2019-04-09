import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import { RampState } from '../redux/ramps/types';
import { calculatePiChartData } from '../utils';
import { PiChartData } from '../components/BarChart'
interface Props {
  data: RampState,
  render: any
}

const ChartContainer: React.FunctionComponent<Props> = ({ data, render }) => {
  const PiData = useMemo(() => calculatePiChartData(data), [data]);
  return (
    <div className="flex column h-full">{render({ PiData})}</div>
  )
};


function mapStateToProps(state: State) {
  return {
    data: state.ramps
  }
}

export default connect(mapStateToProps, null)(ChartContainer)