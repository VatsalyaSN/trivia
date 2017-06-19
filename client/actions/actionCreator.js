export function setStats(correct,incorrect){
	return {
		type : "SET_STATS",
		correct,
		incorrect
	}
}

export function resetStats(correct,incorrect){
	return{
		type :"RESET_STATS",
		correct,
		incorrect
	}
}