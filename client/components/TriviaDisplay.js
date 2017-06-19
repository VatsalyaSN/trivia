import React from 'react';
import ChartDisplay from './ChartDisplay';
import FormDisplay from './FormDisplay';


const TriviaDisplay = React.createClass({
	render(){
		const {question} = this.props;
		return(
			<div>
			<FormDisplay question={question}/>
			<ChartDisplay />
			</div>
			)
	}
})

export default TriviaDisplay;