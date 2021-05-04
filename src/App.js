import React from 'react';
import { ElevateAppBar } from './components/ToolBar/AppBar';
import { Players } from './components/Players/Players';
import { OldPlayers } from './components/Players/Players';

function App() {
  return <div>
    <ElevateAppBar />
    <Players />
  </div>;

}

export default App;