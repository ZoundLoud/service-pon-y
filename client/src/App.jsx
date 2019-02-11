import React from 'react';


import artistData from './data/artistData';
import songData from './data/songData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: artistData[0].artist_name,
      avatar: artistData[0].avatar_picture,
      followCount: artistData[0].no_of_followers,
      trackCount: artistData[0].no_of_tracks,
      isFollowing: artistData[0].is_followed,
    };

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow() {
    const { isFollowing } = this.state;
    this.setState({
      isFollowing: !isFollowing,
    });
  }

  render() {
    const {
      name, avatar, followCount, trackCount, isFollowing,
    } = this.state;
    return (
      <div className="container">
        <img src={avatar} alt="avatar" />
        <div id="artistName">{name}</div>
        <div id="followAndTrackCount">
         (icon here):
          {followCount}
          (icon here):
          {trackCount}
        </div>
        <button id="followingButton" onClick={this.toggleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
      </div>
    );
  }
}
export default App;
