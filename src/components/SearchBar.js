import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return(
      <div className="text-red-dark shadow-md p-2">
        <form onSubmit={this.onFormSubmit}>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline my-5" id="username" type="text" placeholder="videos search" value={this.state.term} onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
