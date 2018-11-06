import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './../reducer/reducer';
import './App.scss';
import Editor from '../components/editor/editor';
import Menu from './../components/menu/menu'

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="left-area">
            <div className="title">
              <h1>My note</h1>
            </div>
            <Editor placeholder="Write something..."></Editor>
          </div>
          <Menu />
        </div>
      </Provider>
    );
  }
}

export default App;
