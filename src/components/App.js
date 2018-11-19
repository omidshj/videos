import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

  onSearch  = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(term);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearch} />
        Appppppppp
      </div>
    );
  }
}

export default App;
