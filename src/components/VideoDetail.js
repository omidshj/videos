import React from 'react';

class VideoDetail extends React.Component {

  render() {
    if (!this.props.video) {
      return <div>choos a video</div>
    }
    return(
      <div>
        <div >
          <iframe
            className="w-full"
            style={{height: "50vh"}}
            src={ 'https://www.youtube.com/embed/' + this.props.video.id.videoId }
            title={ this.props.video.snippet.title }
          />
        </div>
        <div>
          <h4>{ this.props.video.snippet.title }</h4>
          <p>{ this.props.video.snippet.description }</p>
        </div>
      </div>
    );
  }

}

export default VideoDetail;
