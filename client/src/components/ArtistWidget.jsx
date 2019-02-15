import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends, faHeadphones, faCircle, faStar, faSquare, faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import NumericLabel from 'react-pretty-numbers';
import FollowButton from './FollowButton';

const params = {
  justification: 'L',
  locales: 'en-AU',
  currency: false,
  percentage: false,
  precision: 1,
  commafy: false,
  shortFormat: true,
  shortFormatMinValue: 1001,
  title: false,
};

function ArtistWidget({ artistData }) {
  if (!artistData) {
    return null;
  }

  const {
    avatar_picture, artist_name, no_of_followers, no_of_tracks, is_followed,
  } = artistData;
  return (
    <div className="artistWidget">
      <img src={avatar_picture} alt="avatar" />
      <div id="artistName">
        <span className="artistNameToolTipContainer" title={`Visit ${artist_name}'s Profile`}>
          {artist_name}
        </span>
        <span className="fa-layers fa-fw" style={{ marginLeft: '3px' }}>
          <span style={{ fontSize: '10px' }}>
            <FontAwesomeIcon icon={faCircle} size="m" color="#f50" />
          </span>
          <span style={{ fontSize: '8px' }}>
            <FontAwesomeIcon icon={faStar} size="xs" color="#fff" />
          </span>
        </span>

      </div>
      <div className="followAndTrackCount">
        <span className="ArtistFollowBadge" id={no_of_followers} title={`${no_of_followers.toLocaleString()} followers`}>
          <span style={{ marginRight: '3px' }}>
            <FontAwesomeIcon color="#999" icon={faUserFriends} />
          </span>
          <NumericLabel params={params}>{no_of_followers}</NumericLabel>
        </span>
        <span className="ArtistTrackBadge" title={`${no_of_tracks} tracks`}>
          <span style={{ marginRight: '3px' }}>
            <FontAwesomeIcon color="#666" padding-right="3px" icon={faHeadphones} />
          </span>
          {no_of_tracks}
        </span>

      </div>
      <FollowButton isFollowing={is_followed} />
      <div className="reportButton" style={{ marginTop: '30px' }}>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} size="1x" transform={{ rotate: 45 }} />
          <span style={{ fontSize: '7px' }}>
            <FontAwesomeIcon icon={faExclamation} size="1x" color="#fff" />
          </span>
        </span>
        {'  Report'}
      </div>
    </div>

  );
}

export default ArtistWidget;
