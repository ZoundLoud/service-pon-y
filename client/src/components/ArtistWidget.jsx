import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends, faHeadphones, faCircle, faStar,
} from '@fortawesome/free-solid-svg-icons';
import NumericLabel from 'react-pretty-numbers';
import artistData from '../data/artistData';

function FollowButton({ isFollowing, toggleFollow }) {
  if (isFollowing) {
    return (
      <button id="followingArtistButton" onClick={toggleFollow}>Following</button>
    );
  }
  return (
    <button id="followArtistButton" onClick={toggleFollow}>Follow</button>
  );
}

class ArtistWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      avatar: null,
      followCount: 0,
      roundedFollows: 0,
      trackCount: null,
      isFollowing: null,
    };

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    const random = Math.floor(Math.random() * 100);
    this.setState({
      name: artistData[random].artist_name,
      avatar: artistData[random].avatar_picture,
      followCount: artistData[random].no_of_followers,
      trackCount: artistData[random].no_of_tracks,
      isFollowing: artistData[random].is_followed,
    });
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

    const params = {
      justification: 'L',
      locales: 'en-AU',
      currency: false,
      percentage: false,
      precision: 1,
      commafy: false,
      shortFormat: true,
      shortFormatMinValue: 1001,
      title: true,

    };

    return (
      <div className="artistWidget">
        <img src={avatar} alt="avatar" />
        <div id="artistName">
          {name}
          {' '}
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} size="m" color="#f50" />
            <FontAwesomeIcon icon={faStar} size="xs" color="#fff" />
          </span>

        </div>
        <div className="followAndTrackCount">
          <span className="ArtistFollowBadge" id={followCount}>
            <span style={{ marginRight: '3px' }}>
              <FontAwesomeIcon color="#999" icon={faUserFriends} />
            </span>
            {/* <span padding-right="3px">{' '}</span> */}
            <NumericLabel params={params}>{followCount}</NumericLabel>
          </span>
          <span className="ArtistTrackBadge">
            <span style={{ marginRight: '3px' }}>
              <FontAwesomeIcon color="#666" padding-right="3px" icon={faHeadphones} />
            </span>
            {trackCount}
          </span>

        </div>
        {/* <button id="followingButton" onClick={this.toggleFollow}>{isFollowing ? 'Following' : 'Follow'}</button> */}
        <FollowButton isFollowing={isFollowing} toggleFollow={this.toggleFollow} />
      </div>
    );
  }
}


export default ArtistWidget;
