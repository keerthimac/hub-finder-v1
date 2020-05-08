import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    // const axios = require('axios'); //require for axios

    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    console.log(text);
    // const axios = require('axios'); //require for axios

    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  searchUser = async (userName) => {
    console.log(userName);
    // const axios = require('axios'); //require for axios

    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  showClear = () => {
    if (this.state.users.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  setAlert = (msg, classname) => {
    this.setState({
      alert: {
        msg: msg,
        classname: classname,
      },
    });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.showClear()} setAlert={this.setAlert} />
                    <Users users={this.state.users} loading={this.state.loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
