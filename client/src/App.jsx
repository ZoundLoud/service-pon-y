import React from 'react';
import ArtistWidget from './components/ArtistWidget';
import SongDetailWidget from './components/songDetailWidget';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsTruncated: true,
    };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  toggleTruncate() {
    this.setState({
      detailsTruncated: !detailsTruncated,
    });
  }

  render() {
    const { detailsTruncated } = this.state;

    return (
      <div className="container">

        <ArtistWidget />
        <SongDetailWidget truncated={detailsTruncated} toggleTruncate={this.toggleTruncate} />
      </div>
    );
  }
}

export default App;
