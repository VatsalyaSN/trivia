import logger from 'redux-logger';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger'
import {createStore, compose ,applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import question from './data/Data';


const defaultState={
	trivia : {
		question : question,
		correct : 0,
		incorrect : 0
	}
}

const store = createStore(rootReducer,defaultState,applyMiddleware(
    logger
  ));

store.subscribe(()=>
	console.log("store changed", store.getState()))

export default store;