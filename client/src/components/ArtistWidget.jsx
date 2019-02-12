import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends, faHeadphones, faCircle, faStar,
} from '@fortawesome/free-solid-svg-icons';
import NumericLabel from 'react-pretty-numbers';
import artistData from '../data/artistData';

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
      name, avatar, followCount, roundedFollows, trackCount, isFollowing,
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
            <FontAwesomeIcon icon={faCircle} size="sm" color="#f50" />
            <FontAwesomeIcon icon={faStar} size="xs" color="#fff" />
          </span>

        </div>
        <div id="followAndTrackCount">
          <span id={followCount}>
            <FontAwesomeIcon icon={faUserFriends} />
            {' '}

            <NumericLabel params={params}>{followCount}</NumericLabel>
          </span>
          {'   '}
          <FontAwesomeIcon color="#666" icon={faHeadphones} />
          {' '}
          {trackCount}
        </div>
        <button id="followingButton" onClick={this.toggleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
      </div>
    );
  }
}
export default ArtistWidget;
