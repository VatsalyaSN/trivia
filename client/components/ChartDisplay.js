import React from 'react';
import BarChart from 'react-d3-basic/lib/bar.js';

const ChartDisplay = (props)=>{ 
	var generalChartData = [{
		name : "correct",
		value : props.correct,
	},
	{
		name : "incorrect",
		value :props.incorrect,
	}]

	var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'value',
        name: 'Bar Chart',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.name;
    },
    xScale = 'ordinal',
    xLabel = "",
    yLabel = "Number of questions",
    yTicks = [10];

		return(
			<BarChart className="barChart"
			      title= {title}
			      data= {generalChartData}
			      width= {width}
			      height= {height}
			      chartSeries = {chartSeries}
			      x= {x}
			      xLabel= {xLabel}
			      xScale= {xScale}
			      yTicks= {yTicks}
			      yLabel = {yLabel}
    		/>)
}

export default ChartDisplay;