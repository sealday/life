import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import BurgerMenu from './components/BurgerMenu'

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
      <BurgerMenu.slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>
        <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>
        <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>
        <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>
        <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>
        <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
      </BurgerMenu.slide>
      <main id="page-wrap">
        <App/>
      </main>
    </div>
  </Provider>,
  document.getElementById('root')
);
