import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="App">
      <div className="d-flex">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;

