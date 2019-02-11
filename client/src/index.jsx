import React from 'react';
import ReactDOM from 'react-dom';
import './file.css';
import ArtistWidget from './components/ArtistWidget';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
