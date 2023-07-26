import React, { Component } from "react";
import Chart from "react-apexcharts";

class InvestChart extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {
      optionsMixedChart: {
        // chart: {
        //   id: "basic-bar",
        //   toolbar: {
        //     show: false
        //   }
        // },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        stroke: {
          width: [4, 4, 4]
        },
        xaxis: {
          categories: [2023,2028, 2033, 2038,2043, 2048]
        },
        markers: {
          size: 3,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 240000,
        }
      },


      seriesMixedChart: [
        {
          name: "4%",
          type: "line",
          data: [15250, 41943, 77618, 116848, 159987, 207424]
        },
        {
          name: "5%",
          type: "line",
          data: [15250, 43261, 82226, 127200, 179107, 239017]
        },
        {
          name: "6%",
          type: "line",
          data: [15250, 44630,87186, 138736, 201183,276828
          ]
        }
      ],
    }
  }
     
  updateCharts() {
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
   

    this.state.seriesMixedChart.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      newMixedSeries.push({ data: data, type: s.type });
    });

    this.setState({
      seriesMixedChart: newMixedSeries,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="500"
            />
          </div>

          <p className="col">
            <button onClick={this.updateCharts}>Update!</button>
          </p>
        
        </div>
      </div>
    );
  }
}
  

export default InvestChart;
