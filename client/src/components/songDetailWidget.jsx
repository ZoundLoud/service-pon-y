import React from 'react';
import songData from '../data/songData';

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
        <div>
          <b>Released By:</b>
          <div>{releasedBy}</div>
          {' '}
          <b>Release Date:</b>
          <div>{releaseDate}</div>
          {' '}
          <b>P-line:</b>
          <div>{pline}</div>
          {' '}
          <b>Licensed By:</b>
          <div>{license}</div>
          {' '}
        </div>
        {tag}
      </div>
    );
  }
}

export default SongDetailWidget;
