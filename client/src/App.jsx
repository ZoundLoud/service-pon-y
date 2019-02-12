import React from 'react';
import ArtistWidget from './components/ArtistWidget';
import SongDetailWidget from './components/songDetailWidget';

function App() {
  return (
    <div className="container">

      <ArtistWidget />
      <SongDetailWidget />
    </div>
  );
}

export default App;
