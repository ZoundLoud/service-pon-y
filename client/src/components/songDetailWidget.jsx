import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import songData from '../data/songData';
import artistData from '../data/artistData';

function SongDetail({ label, value }) {
  if (!value) {
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


class SongDetailWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: songData[0].description_text,
      tags: songData[3].tags,
      license: songData[0].license,
      releasedBy: songData[0].released_by,
      releaseDate: songData[0].release_date,
      pline: songData[0].p_line,

    };
    this.expandDescription = this.expandDescription.bind(this);
    this.parseAtInDescription = this.parseAtInDescription.bind(this);
  }


  componentDidMount() {
    const random = Math.floor(Math.random() * 100);
    this.setState({
      description: songData[0].description_text,
      tags: songData[random].tags,
      license: songData[random].license,
      releasedBy: songData[random].released_by,
      releaseDate: songData[random].release_date,
      pline: songData[random].p_line,
    });
  }

  parseAtInDescription() {
    const { description } = this.state;

    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    const parsedDescription = [];
    const descriptionArray = description.split(' ');
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
        parsedDescription.push(<span className="songDescriptionAt">
          {word}
          {' '}
          <span>
            <img src={artistObject.avatar_picture} />
            <div className="songComponentAtArtistName" title={`Visit ${artistObject.artist_name}'s profile`}>{artistObject.artist_name}</div>
            <div className="songComponentAtFollows" title={`${artistObject.no_of_followers} followers`}>
              <FontAwesomeIcon icon={faUserFriends} color="#999" />
              {' '}
              <small>
                {artistObject.no_of_followers}
              </small>
            </div>
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

  expandDescription() {
    // const { this.proptruncated } = this.props;
    if (this.props.truncated) {
      return (
        <div className="showMoreText" onClick={this.props.toggleTruncate}>
Show more
          <span><FontAwesomeIcon icon={faAngleDown} /></span>
        </div>
      );
    }
    return (
      <div className="showMoreText" onClick={this.props.toggleTruncate}>
Show less
        <span><FontAwesomeIcon icon={faAngleUp} /></span>
      </div>
    );
  }

  render() {
    const {
      description, license, releaseDate, releasedBy, pline, tags,
    } = this.state;
    // const { truncated, toggleTruncate } = this.props;
    const array = tags.split(' ');
    const tag = array.map(el => (
      <span className="tag">
        #
        {el}
      </span>
    ));

    const truncatedClassName = this.props.truncated ? 'songDetailWidgetSmall' : 'songDetailWidgetExpanded';
    return (
      <div id="songDetailContainer">
        <div className={truncatedClassName}>

          <div style={{ whiteSpace: 'pre-wrap' }}>{this.parseAtInDescription()}</div>
          <div className="detailsContainer">
            <SongDetail label="Released By:" value={releasedBy} />
            <SongDetail label="Release Date:" value={releaseDate} />
            <SongDetail label="P-line:" value={pline} />
            <SongDetail label="Licensed By:" value={license} />

          </div>
          <div />
          <div className="descriptionTagContainer">
            {tag}
          </div>

        </div>
        {this.expandDescription()}
      </div>
    );
  }
}

export default SongDetailWidget;
