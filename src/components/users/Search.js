import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    //   console.log(this.state.text);
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }

    e.preventDefault();
  };

  render() {
    const { clearUsers } = this.props;
    const { showClear } = this.props;
    // console.log(showClear);
    return (
      <div>
        <form className="form-text" onSubmit={this.handleSubmit}>
          <input placeholder="Search users" type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" name="submit" className="btn btn-dark btn-block" />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
