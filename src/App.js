import React, { Component } from 'react';
import logo from './logo.svg';
import './tailwind.css';

class App extends Component {
  render() {
    return (
      <div className="relative overflow-auto min-w-screen min-h-screen bg-gray-100">
        <header className="flex shadow-2xl pl-3 items-center relative w-screen top-0 min-w-screen bg-gray-900">
          <p className="pl-3 text-lg font-semibold text-gray-200">Boat Ramps AAS</p>
        </header>
      </div>

    );
  }
}

export default App;
