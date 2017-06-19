import React from 'react';
import ChartDisplay from './ChartDisplay';
import FormDisplay from './FormDisplay';


const TriviaDisplay = React.createClass({
	render(){
		const {question,correct,incorrect,setStats,resetStats} = this.props;
		return(
			<div>
			<FormDisplay question={question} setStats={setStats} resetStats={resetStats}/>
			<ChartDisplay correct={correct} incorrect={incorrect} />
			</div>
			)
	}
})

export default TriviaDisplay;