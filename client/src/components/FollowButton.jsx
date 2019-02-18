import React from 'react';
import * as Styles from './followButtonStyles';

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
        <Styles.followingArtistButton onClick={this.toggleFollow} title={followToolTip}>Following</Styles.followingArtistButton>
      );
    }
    return (
      <Styles.followArtistButton onClick={this.toggleFollow} title={followToolTip}>Follow</Styles.followArtistButton>
    );
  }
}

export default FollowButton;
