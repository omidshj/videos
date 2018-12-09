import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {



  render() {
    const videos = this.props.videos.map((video) => {
      return <VideoItem onVideoSelect={this.props.onVideoSelect} video={ video } key={ video.snippet.channelId } />;
    });
    return(
      <div className="shadow-md mt-5">{ videos }</div>
    );
  }
}

export default VideoList;
