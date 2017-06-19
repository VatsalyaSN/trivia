import React from 'react';
import Display from './Display';
import Data from './Data';

const Reverse = React.createClass({
	renderItems(item,i){
		return(
			<div>
			<h3>{item.data} -- {item.reverse}</h3>
			</div>
			)
	},

	render(){
		return(
			<div className="reverse">
			{
				this.props.reverse.map((item,i) => {return <Data item={item}/>})
			}
			<Display textToReverse={this.props.textToReverse}/>
			</div>
		)	
	}
})

export default Reverse;