import React from 'react';
import ArtistWidget from './components/ArtistWidget';
import SongDetailWidget from './components/songDetailWidget';

import Styled from './appContainerStyle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsTruncated: true,
      artistData: null,
      songData: null,
      artistIdx: null,
    };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  componentDidMount() {
    fetch('http://ponydescription.us-west-1.elasticbeanstalk.com/artistinfo').then(response => response.json())
      .then((data) => {
        this.setState({
          artistData: data,
          artistIdx: Math.floor(Math.random() * data.length),
        });
        return data;
      });
    fetch(`http://ponydescription.us-west-1.elasticbeanstalk.com${window.location.pathname}songinfo/`).then(response => response.json())
      .then((data) => {
        this.setState({
          songData: data,
        });
        return data;
      });
  }

  toggleTruncate() {
    const { detailsTruncated } = this.state;
    this.setState({
      detailsTruncated: !detailsTruncated,
    });
  }


  render() {
    const {
      artistData, artistIdx, songData, detailsTruncated,
    } = this.state;

    let songNumber = window.location.pathname.split('/')[2];
    if(songNumber === '' || !songNumber ) {
      songNumber = 4;
    } 
    return (
      <Styled>

        <ArtistWidget artistData={artistData && artistData[songNumber - 1]} />
        <SongDetailWidget artistData={artistData} songData={songData && songData[0]} truncated={detailsTruncated} toggleTruncate={this.toggleTruncate} />
      </Styled>
    );
  }
}

export default App;
