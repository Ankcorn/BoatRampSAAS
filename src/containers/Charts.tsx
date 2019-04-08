import React from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/store';
import { RampState } from '../redux/ramps/types';

interface Props {
  data: RampState,
  render: any
}
class ChartContainer extends React.Component<Props>{
  
  render() {
    return (
      <div className="flex column h-full">{this.props.render(this.props.data)}</div>
    )
  }
}


function mapStateToProps(state: State) {
  return {
    data: state.ramps
  }
}

export default connect(mapStateToProps, null)(ChartContainer)