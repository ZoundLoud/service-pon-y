import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import songData from '../data/songData';

function SongDetail({ label, value }) {
  if (!value) {
    return null;
  }
  if (label === 'Release Date:') {
    return (
      <div>
        <b>
          {' '}
          {label}
          {' '}
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
  }

  componentDidMount() {
    const random = Math.floor(Math.random() * 100);
    this.setState({
      description: songData[random].description_text,
      tags: songData[random].tags,
      license: songData[random].license,
      releasedBy: songData[random].released_by,
      releaseDate: songData[random].release_date,
      pline: songData[random].p_line,
    });
  }

  expandDescription() {
    return null;
  }

  render() {
    const {
      description, license, releaseDate, releasedBy, pline, tags,
    } = this.state;
    const array = tags.split(' ');
    const tag = array.map(el => (
      <span className="tag">
        {' '}
        #
        {el}
        {' '}
      </span>
    ));
    return (
      <div id="songDetailContainer">
        <div id="songDetailWidgetSmall">
          <div>{description}</div>
          <div className="detailsContainer">
            <SongDetail label="Released By:" value={releasedBy} />
            <SongDetail label="Release Date:" value={releaseDate} />
            <SongDetail label="P-line:" value={pline} />
            <SongDetail label="Licensed By:" value={license} />

          </div>

          {tag}
        </div>
        <div>
Show more
          {'  '}
          <span><FontAwesomeIcon color="#999" icon={faAngleDown} /></span>
          {' '}
        </div>
      </div>
    );
  }
}

export default SongDetailWidget;
