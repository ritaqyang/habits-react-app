import React, { Component } from 'react';
import Chart from 'react-apexcharts'; 
import Button from '../../button/button.component';
import { selectSpending } from '../../../store/spending/spending.selector';
import { useSelector } from 'react-redux/es/hooks/useSelector';

class Donut extends Component {
  constructor(props) {
    super(props);
    this.updateCharts = this.updateCharts.bind(this);
    this.state = {
      options: {
        labels: ['Grocery', 'Rent', 'Clothes', 'Utilities','GoingOut', 'Other']
      },
      series: [10,10,10,10,14,15]
      
    }
  }

  
  updateCharts(arr){


    const newSeries = [10,10,10,10,10,10];
    
    this.setState({
      
      series: arr,
    
    });
    
  }; 

  render() {

    return (
      <>
      <div className="donut">
        
        <Chart options={this.state.options} series={this.state.series} label={this.state.labels} type="donut" width="380" />

        {/* <Button type='button' onClick={this.updateCharts}>update</Button> */}
      </div>




</>
)
    
  }
}

export default Donut;
