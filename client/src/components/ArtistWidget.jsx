import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends, faHeadphones, faCircle, faStar, faSquare, faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import NumericLabel from 'react-pretty-numbers';
import FollowButton from './FollowButton';

import * as Styles from './artistStyles';

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

  function isPro(pro_status) {
    if (pro_status) {
      return (

        <span className="fa-layers fa-fw" style={{ marginLeft: '3px' }}>
          <span style={{ fontSize: '10px' }}>
            <FontAwesomeIcon icon={faCircle} size="m" color="#f50" />
          </span>
          <span style={{ fontSize: '8px' }}>
            <FontAwesomeIcon icon={faStar} size="xs" color="#fff" />
          </span>
        </span>
      );
    }
    return null;
  }

  const {
    avatar_picture, artist_name, no_of_followers, no_of_tracks, is_followed, pro_status,
  } = artistData;

  return (
    <Styles.artistWidget>
      <Styles.avatarPic src={avatar_picture} alt="avatar" />
      <Styles.artistName title={`Visit ${artist_name}'s Profile`}>
        {artist_name}
        {isPro(pro_status)}
      </Styles.artistName>
      <Styles.followAndTrackCount>
        <Styles.ArtistFollowBadge title={`${no_of_followers.toLocaleString()} followers`}>
          <FontAwesomeIcon color="#999" icon={faUserFriends} />
          {' '}
          <NumericLabel params={params}>{no_of_followers}</NumericLabel>
        </Styles.ArtistFollowBadge>
        <Styles.ArtistTrackBadge title={`${no_of_tracks} tracks`}>
          <FontAwesomeIcon color="#666" icon={faHeadphones} />
          {` ${no_of_tracks}`}
        </Styles.ArtistTrackBadge>

      </Styles.followAndTrackCount>
      <FollowButton isFollowing={is_followed} />
      <Styles.reportButton>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} size="1x" transform={{ rotate: 45 }} />
          <span style={{ fontSize: '7px' }}>
            <FontAwesomeIcon icon={faExclamation} size="1x" color="#fff" />
          </span>
        </span>
        {'  Report'}
      </Styles.reportButton>
    </Styles.artistWidget>

  );
}

export default ArtistWidget;
