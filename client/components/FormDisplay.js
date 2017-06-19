import React from 'react';

const FormDisplay = React.createClass({
	getInitialState(){
		var count=0;
		var arr=[];
		for(var key in this.props.question){
			count++;
		}
		for(var j=0;j<count;j++){
			arr.push("none");
		}
		return {
			cName:arr,
			}
	},

	renderCName(i){
		return "dropDownMenu "+ this.state.cName[i];
	},

	renderQuestion(item,i){
		return <div className="quest">
				 <p className='qstatement' key={i}>{this.props.question[item].q}</p>
				 <select id={item} className={this.renderCName(i)}>
				 {this.props.question[item].o.map(function(opt,v){
				 	return <option className="right" value={opt} key={v}>{opt}</option>
				 })}

				 </select>
				 </div>
	},

	renderItem(question){
		var arr = [];
		for(var key in question){
			arr.push(key)
		}
		return arr.map(this.renderQuestion)
	},

	checkAnswer(item,i){
		var newArr=[];
    	if(this.props.question[item].a !== this.state.answers[i])
    		{
    			newArr.push("wrong");
    		}
    	return newArr;
	},

	handleSubmit(){
		var arr = [];
	    var newArr = [];
		var elt,correct=0,incorrect=0;
		var text=[];
		for(var key in this.props.question){
			arr.push(key)
		}
		arr.map(function(item,i){
			elt = document.getElementById(item);
			if (elt.selectedIndex == -1)
	        	return null;

	    	text.push(elt.options[elt.selectedIndex].text);
    	})
    
	    for(var i=0;i<arr.length;i++){
	    	console.log(text[i])
	    	if(text[i] === "select")
    		{
    			alert("Please select answer")
    			return;
    		}
    		
    		else if(this.props.question[arr[i]].a !== text[i])
    			{
    				newArr.push("wrong");
    				incorrect++;
    			}

    		else
    		{
    			newArr.push("none")
    			correct++;
    		}

    	}
	    this.setState({
    			cName : newArr
    		})
    	this.props.setStats(correct,incorrect);
	},

	resetForm(){
		this.refs.form.reset();
		var count=0;
		var arr=[];
		for(var key in this.props.question){
			count++;
		}
		for(var j=0;j<count;j++){
			arr.push("none");
		}
		this.setState({
				cName : arr
			})
		this.props.resetStats(0,0);
	},

	render(){
		return(
			<div className="formDiv">
			<form className="form" ref="form" >
				{this.renderItem(this.props.question)}
			</form>
			<button className="btn-submit" onClick={()=>this.handleSubmit()}>Submit</button>
			<button className="btn-submit" onClick={()=>this.resetForm()}>Reset</button>
			</div>
			)
	}
})

export default FormDisplay;