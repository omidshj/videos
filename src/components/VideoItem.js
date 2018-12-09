import React from 'react';

class VideoItem extends React.Component {



  render() {
    // console.log(this.props.video);
    return(
      <div className="flex p-2 cursor-pointer" onClick={() => this.props.onVideoSelect(this.props.video)} >
        <div className="w-2/5">
          <img className="" src={ this.props.video.snippet.thumbnails.medium.url } alt={ this.props.video.snippet.title }  />
        </div>
        <div className="w-3/5 pl-3"> { this.props.video.snippet.title } </div>
      </div>
    );
  }
}

export default VideoItem;
