import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    this.onSearch('سبلان');
  }
  onSearch  = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearch} />
        <div className="flex mb-4">
          <div className="w-3/4">
            <VideoDetail video={ this.state.selectedVideo } />
          </div>
          <div className="w-1/4">
            <VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
