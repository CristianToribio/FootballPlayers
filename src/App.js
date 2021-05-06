import React, { useState } from 'react';
import { ElevateAppBar } from './components/ToolBar/AppBar';
import { Players } from './components/Players/Players';
import { OldPlayers } from './components/OldPlayer/OldPlayer';
import { YoungPlayers } from './components/YoungPlayer/YoungPlayer';
import { Sub21 } from './components/Sub21/Sub21';
import { Middleage } from './components/MiddleAge/Middleage';

function App() {
  // ESTADO: vista actual (players, sub21,...)
  const [view, setView] = useState(null)


  const getCurrentView = () => {
    // en función de la vista actual, seleccionar uno u otro componente
    switch (view) {
      case 1:
        return <OldPlayers />;
      case 2:
        return <YoungPlayers />;
      case 3:
        return <Middleage />;
      case 4:
        return <Sub21 />;
      default:
        return <Players />;
    }
  };

  return (
    <>
      <ElevateAppBar onChange={(value) => {
        // establecer view, como el value pasado
        setView(value);
      }} /> <br />
      { getCurrentView()}
    </>
  );

}

export default App;