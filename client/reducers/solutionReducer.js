function solutionReducer(state=[],action){
switch(action.type){
	case "SET_STATS":
		return Object.assign({},state,{
			correct : action.correct,
			incorrect : action.incorrect
		});

	case "RESET_STATS":
		return Object.assign({},state,{
			correct : action.correct,
			incorrect : action.incorrect
		})

	default : 
	return state;
}
}

export default solutionReducer;