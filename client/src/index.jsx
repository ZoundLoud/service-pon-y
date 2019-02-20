import React from 'react';
import ReactDOM from 'react-dom';
import './file.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('description'));

if (module.hot) {
  module.hot.accept();
}
