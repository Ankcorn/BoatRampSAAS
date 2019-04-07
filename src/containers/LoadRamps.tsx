import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadingData, loadingDataError, saveData} from '../redux/data/actions';
import { Dispatch } from 'redux';

interface Props {
  loadRampData: Function
}


export const LoadRamps: React.FunctionComponent<Props> = ({ loadRampData, children }) => {
  useEffect(() => {
    loadRampData()
  }, []);
  return <Fragment>{children}</Fragment>
}

async function loadRampData(dispatch: Dispatch): Promise<void> {
  try {
    dispatch(loadingData());
    const data = await fetch('/.netlify/functions/ramps');
    const json = await data.json();
    dispatch(saveData(json));
  } catch (e) {
    dispatch(loadingDataError());
    throw e
  }
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadRampData: () => loadRampData(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoadRamps);