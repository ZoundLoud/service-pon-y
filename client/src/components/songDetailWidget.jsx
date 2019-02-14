import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import songData from '../data/songData';


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

    const parsedDescription = [];
    const hold = '';
    const descriptionArray = description.split(' ');
    descriptionArray.forEach((word) => {
      if (word[0] === '@') {
        parsedDescription.push(<span className="songDescriptionAt">
          {word}
          {' '}
        </span>);
      } else {
        parsedDescription.push(`${word} `);
      }
    });

    console.log('parsed??? ', parsedDescription);
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
          {/* <div>{description}</div> */}
          <div>{this.parseAtInDescription()}</div>
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
