import React from 'react';


import artistData from './data/artistData';
import songData from './data/songData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>{songData[0].description_text}</div>
    );
  }
}
export default App;
