import React, { Component } from 'react';
import './tailwind.css';
import Map from './containers/UseRamps';
import { Anchor } from 'react-feather';
import LoadRamps from './containers/LoadRamps';
import ErrorBoundry from './components/ErrorBoundry';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col overflow-hidden w-screen h-screen bg-gray-100">
        <header className="flex shadow-2xl pl-3 items-center w-screen bg-gray-900">
          <Anchor color="#9f7aea" /><p className="pl-3 text-lg font-semibold text-gray-200">Boat Ramps AAS</p>
        </header>
        <ErrorBoundry>
          <LoadRamps> 
            <Map />
          </LoadRamps>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
