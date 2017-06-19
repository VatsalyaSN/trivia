import React from 'react';

const FormDisplay = React.createClass({

	renderItem(question){
		var arr = [];
		for(var key in question){
			arr.push(key)
		}
		return arr.map(function(item,i){
			return(<div>
				 <p>{question[item].q}</p>
				 <select>
				 {question[item].o.map(function(opt,i){
				 	return <option value={opt}>{opt}</option>
				 })}
				 </select>
				 </div>
		)
		})
	},

	handleSubmit(e){
		// e.preventDefault();
		
		// this.refs.form.reset();
	},

	render(){
		return(
			<form className="form" ref="form" onSubmit={this.handleSubmit}>
				{this.renderItem(this.props.question)}
			</form>
			)
	}
})

export default FormDisplay;