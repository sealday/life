import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import SlideMenu from './components/SlideMenu'

import * as reducers from './reducers'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import './index.css';

const store = createStore(
  combineReducers(reducers),
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
  <Provider store={store}>
    <div id="outer-container" style={{ height: '100%' }}>
      <SlideMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>
        <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>
        <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>
        <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>
        <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>
        <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
      </SlideMenu>
      <main id="page-wrap">
        <App/>
      </main>
    </div>
  </Provider>,
  document.getElementById('root')
);
