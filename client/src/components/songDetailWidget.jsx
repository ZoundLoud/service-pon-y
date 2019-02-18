import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import NumericLabel from 'react-pretty-numbers';
import FollowButton from './FollowButton';

function SongDetail({ label, value }) {
  if (!value || value === '') {
    return null;
  }
  if (label === 'Release Date:') {
    return (
      <div>
        <b>
          {label}
        </b>
        <Moment format="D MMMM YYYY" date={value} />

      </div>
    );
  }
  return (
    <div>
      <b>{label}</b>
      <div>{value}</div>
    </div>
  );
}

function SongDetailWidget({
  artistData, songData, truncated, toggleTruncate,
}) {
  if (!songData) {
    return null;
  }
  if (!artistData) {
    return null;
  }
  function parseAtInDescription() {
    const { description_text } = songData;

    if (!songData) {
      return null;
    }
    if (!artistData) {
      return null;
    }
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    const parsedDescription = [];
    const descriptionArray = description_text.split(' ');

    const params = {
      justification: 'L',
      locales: 'en-AU',
      currency: false,
      percentage: false,
      precision: 0,
      commafy: true,
      shortFormat: false,
      title: false,

    };
    descriptionArray.forEach((word) => {
      if (word[0] === '@') {
        const artistName = word.substring(1);
        let artistObject = null;
        for (let i = 0; i < 100; i++) {
          if (artistName === artistData[i].artist_name) {
            artistObject = artistData[i];
            break;
          }
        }
        const followers = artistObject.no_of_followers;

        parsedDescription.push(<span className="songDescriptionAt tooltip">
          {word}
          {' '}
          <span className="bottom">
            <div className="popup">
              <img src={artistObject.avatar_picture} />
              <div className="songComponentAtArtistName" title={`Visit ${artistObject.artist_name}'s profile`}>{artistObject.artist_name}</div>
              <div className="songComponentAtFollows" title={`${artistObject.no_of_followers.toLocaleString()} followers`}>
                <FontAwesomeIcon icon={faUserFriends} color="#999" />
                {' '}
                <small>
                  {<NumericLabel params={params}>{followers}</NumericLabel>}
                </small>
              </div>
              <FollowButton isFollowing={artistObject.is_followed} toggleFollow="" />
            </div>
            <i />
          </span>
          {' '}
        </span>);
      } else if (regexp.test(word)) {
        parsedDescription.push(<span className="songDescriptionURL">
          {`${word} `}
          {' '}
                               </span>);
      } else {
        parsedDescription.push(`${word} `);
      }
    });

    return (
      <div>
        {parsedDescription}
      </div>
    );
  }

  function expandDescription() {
    if (truncated) {
      return (
        <div className="showMoreText" onClick={toggleTruncate}>
Show more
          <span><FontAwesomeIcon icon={faAngleDown} /></span>
        </div>
      );
    }
    return (
      <div className="showMoreText" onClick={toggleTruncate}>
Show less
        <span><FontAwesomeIcon icon={faAngleUp} /></span>
      </div>
    );
  }


  const {
    license, release_date, released_by, p_line, tags,
  } = songData;

  const array = tags.split(' ');
  const tag = array.map(el => (
    <span className="tag">
        #
      {el}
    </span>
  ));

  const truncatedClassName = truncated ? 'songDetailWidgetSmall' : 'songDetailWidgetExpanded';
  return (
    <div id="songDetailContainer" className="songDetailContainer">
      <div className={truncatedClassName}>

        <div style={{ whiteSpace: 'pre-wrap' }}>{parseAtInDescription()}</div>
        <div className="detailsContainer">
          <SongDetail label="Released By:" value={released_by} />
          <SongDetail label="Release Date:" value={release_date} />
          <SongDetail label="P-line:" value={p_line} />
          <SongDetail label="Licensed By:" value={license} />

        </div>
        <div />
        <div className="descriptionTagContainer">
          {tag}
        </div>

      </div>
      {expandDescription()}
    </div>
  );
}

export default SongDetailWidget;
