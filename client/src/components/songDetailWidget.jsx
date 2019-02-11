import React from 'react';
import songData from '../data/songData';

class SongDetailWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: songData[0].description_text,
      tags: songData[0].tags,
      license: songData[0].license,
      releasedBy: songData[0].released_by,
      releaseDate: songData[0].release_date,


    };
  }

  render() {
    const {
      description, license, releaseDate, releasedBy,
    } = this.state;
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
          <b>Licensed By:</b>
          <div>{license}</div>
          {' '}
        </div>
      </div>
    );
  }
}

export default SongDetailWidget;
