import React from 'react';
import songData from '../data/songData';


function SongDetail({ label, value }) {
  if (!value) {
    return null;
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
      <div className="songDetailWidget">
        <div>{description}</div>
        <div className="detailsContainer">
          <SongDetail label="Released By:" value={releasedBy} />
          <SongDetail label="Release Date:" value={releaseDate} />
          <SongDetail label="P-line:" value={pline} />
          <SongDetail label="Licensed By:" value={license} />

        </div>
        {tag}
      </div>
    );
  }
}

export default SongDetailWidget;
