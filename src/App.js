import React from 'react';
import './App.css';
import Tabs from './components/Tabs'

export const SuperContext = React.createContext('super');

class App extends React.Component {

  render() {
    return (
      <SuperContext.Provider value="some value">
        <div className="App">
          <Tabs items={[
            {text: 'Tab1'},
            {text: 'Tab2'},
            {text: 'Tab3'},
            {text: 'Tab4'}
          ]} />
        </div>
      </SuperContext.Provider>
    );
  }
}

export default App;
