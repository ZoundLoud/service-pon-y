import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: this.props.isFollowing,
    };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow() {
    const { isFollowing } = this.state;
    this.setState({
      isFollowing: !isFollowing,
    });
  }

  render() {
    const { isFollowing } = this.state;
    const followToolTip = isFollowing ? 'Unfollow' : 'Follow';
    if (isFollowing) {
      return (
        <button id="followingArtistButton" onClick={this.toggleFollow} title={followToolTip}>Following</button>
      );
    }
    return (
      <button id="followArtistButton" onClick={this.toggleFollow} title={followToolTip}>Follow</button>
    );
  }
}

export default FollowButton;
