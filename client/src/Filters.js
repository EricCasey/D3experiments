import React from 'react';
//import Client from './Client';  //<-- this is for requests

class Filters extends React.Component {
  state = {
    showRemoveIcon: false,
    searchValue: '',
    dataSet: []
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        foods: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  handleSearch = (event) => {
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.
    console.log(this.state.searchValue + " <-- Searched")
    // Client.search(this.state.searchValue, (r) => {
    //   console.log("at this point")
    //   this.setState({
    //     dataSet: r
    //   })
    // })
      return fetch(`api/city/${this.state.searchValue}`, {
        accept: 'application/json',
      }).then((res) => {
          console.log("ITS WORKING!")
          console.log(res)
        //  return res.json()
      })

    console.log(this.state.dataSet)
  }

  render() {
    const { showRemoveIcon } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    return (
      <div id='food-search' height='100%'>
        <div className='ui fluid search align-bottom'>
          <div className='ui icon input'>
          <form
          onSubmit={this.handleSearch}
          >
            <input
              className='prompt'
              type='text'
              placeholder='Search Actors...'
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
            />
            </form>
            <i className='search icon' />
          </div>
          <i
            className='remove icon'
            onClick={this.handleSearchCancel}
            style={removeIconStyle}
          />
        </div>
      </div>
    )
  }
}

export default Filters;
