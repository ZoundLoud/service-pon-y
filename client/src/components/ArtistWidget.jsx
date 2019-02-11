import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends, faHeadphones, faCircle, faStar,
} from '@fortawesome/free-solid-svg-icons';
import artistData from '../data/artistData';

class ArtistWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: artistData[0].artist_name,
      avatar: artistData[5].avatar_picture,
      followCount: artistData[0].no_of_followers,
      roundedFollows: 0,
      trackCount: artistData[0].no_of_tracks,
      isFollowing: artistData[0].is_followed,
    };

    this.toggleFollow = this.toggleFollow.bind(this);
    this.roundFollowCount = this.roundFollowCount.bind(this);
  }

  componentDidMount() {
    this.roundFollowCount();
  }

  roundFollowCount() {
    const { followCount } = this.state;
    if (followCount < 1000) {
      this.setState({
        roundedFollows: followCount,
      });
    } else if (followCount < 10000) {
      let num = followCount / 1000;
      num = num.toString();
      const newNum = `${num[0] + num[1] + num[2] + num[3]} K`;

      this.setState({
        roundedFollows: newNum,
      });
    } else if (followCount < 100000) {
      let num = followCount / 10000;
      num = num.toString();
      const newNum = `${num[0] + num[1] + num[2] + num[3]} K`;

      this.setState({
        roundedFollows: newNum,
      });
    } else if (followCount < 1000000) {
      let num = followCount / 10000;
      num = num.toString();
      const newNum = `${num[0] + num[1] + num[2] + num[3]} K`;

      this.setState({
        roundedFollows: newNum,
      });
    } else {
      let num = followCount / 1000000;
      num = num.toString();
      const newNum = `${num[0] + num[1] + num[2] + num[3]} M`;

      this.setState({
        roundedFollows: newNum,
      });
    }
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
    return (
      <div className="container">
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

            {roundedFollows}
          </span>
          {' '}
          <FontAwesomeIcon icon={faHeadphones} />
          {' '}
          {trackCount}
        </div>
        <button id="followingButton" onClick={this.toggleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
      </div>
    );
  }
}
export default ArtistWidget;
