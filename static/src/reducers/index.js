import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import solutionReducer from './solutionReducer';

const rootReducer = combineReducers({trivia:solutionReducer,
	routing:routerReducer});

export default rootReducer;