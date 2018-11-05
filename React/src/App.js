import React from 'react';
import Header from './components/Header';
import { render } from 'react-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduce from "./reducers/reduce";
import axios from "axios";

const store = createStore(reduce);

class MyFinalResults extends React.Component {

  state = {
    customers: []
  }

  componentDidMount() {
    store.subscribe(() => {
      
    });

    axios.get('http://localhost:5000').then(result => {
      console.log(result);
      this.setState({customers:result.data});
    });
  }

  render() {
    return(
    <p>This is NOT the homepage. Its homepage.js.</p>
  );
  }
  }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000').then(result => console.log(result));
  }

  render() {
    return(
  <div>
  <Provider store={store}>
  <Search />
  </Provider>
  <MyFinalResults />
</div>
);
}
}

export default App;