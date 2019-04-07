import React, { Component } from 'react';
import './tailwind.css';
import Map from './containers/UseRamps';
import { Anchor } from 'react-feather';
import LoadRamps from './containers/LoadRamps';

async function makeApiCall(): Promise<void> {
  const data = await fetch('/.netlify/functions/file');
  const json = await data.json()
  console.log(json)
}
class App extends Component {
  render() {
    return (
      <div className="relative overflow-auto min-w-screen min-h-screen bg-gray-100">
        <header className="flex shadow-2xl pl-3 items-center relative w-screen top-0 min-w-screen bg-gray-900" onClick={async () => await makeApiCall()}>
          <Anchor color="#9f7aea" /><p className="pl-3 text-lg font-semibold text-gray-200">Boat Ramps AAS</p>
        </header>
        <LoadRamps> 
          <Map />
        </LoadRamps>
      </div>
    );
  }
}

export default App;
