//copied from Lesson 8 instructions
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { saveRepos } from "./actions/AppActions";
//lesson 6
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduce from "./reducers/reduce";

class Search extends React.Component {
  state = {
    search: ""
  };

  searchGithub = () => {
    fetch('https://api.github.com/search/repositories?q=' + this.state.search + '&type=Repositories&sort=stars&per_page=10')
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson.items));
      })
    };

  //form submission by default perform'POST", triggers rerender e.prev...below stops it
  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div className="container">
        <Header title="Search" />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {repos: state.repos};
};

export default connect(mapStateToProps)(Search);
