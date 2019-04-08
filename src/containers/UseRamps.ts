import { connect } from 'react-redux';
import Map from '../components/Map';
import { State } from '../redux/store';

function mapStateToProps(state: State) {
  return {
    data: state.ramps
  }
}

export default connect(mapStateToProps, null)(Map)