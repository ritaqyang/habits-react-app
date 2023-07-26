import React, { Component } from 'react';
import Chart from 'react-apexcharts'; 


import Button from '../../button/button.component';


class Donut extends Component {
  constructor(props) {
    super(props);
    this.updateCharts = this.updateCharts.bind(this);
    

    this.state = {
      options: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
      },
      
      series: [44, 55, 41, 17, 15],
      
    }
  }

  
  updateCharts() {

    const newSeries = [10,10,10,10,10];
    const newlabels = ['A', 'B', 'C', 'D', 'E'];
  
    this.setState({
      
      series: newSeries,
    
    });
    
  }; 

  render() {

    return (
      <>
      <div className="donut">
        
        <Chart options={this.state.options} series={this.state.series} label={this.state.labels} type="donut" width="380" />

        <Button type='button' onClick={this.updateCharts}>update</Button>
      </div>




</>
)
    
  }
}

export default Donut;