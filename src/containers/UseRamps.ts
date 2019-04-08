import { connect } from 'react-redux';
import Map from '../components/Map';
import { State } from '../redux/store';

function mapStateToProps(state: State) {
  return {
    data: state.data.raw && state.data.raw
  }
}

export default connect(mapStateToProps, null)(Map)