import { connect } from 'react-redux';
import Map from '../components/Map';

function mapStateToProps(state: any) {
  return {
    data: state.data.raw && state.data.raw
  }
}

export default connect(mapStateToProps, null)(Map)