import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import solutionReducer from './solutionReducer';

const rootReducer = combineReducers({question:solutionReducer,
	routing:routerReducer});

export default rootReducer;