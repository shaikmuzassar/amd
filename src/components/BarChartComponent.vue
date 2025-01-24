<template>
    <v-container>
      <v-card>
        <v-card-title>Current Test</v-card-title>
        <v-card-text>
          <highcharts :options="chartOptions" ref="chart"></highcharts>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
  
  export default {
    name: "BarChartComponent",
    components: {
      highcharts: HighchartsVue.component,
    },
    data() {
      return {
        chartOptions: {
          chart: {
            type: "column",
          },
          title: {
            text:null,
          },
          xAxis: {
            categories: ["Itiration 1"],
            title: {
              text: null,
            },
          },
          yAxis: {
            min: 0,
            tickPositions: [50, 100, 150, 200, 250, 300, 350],
            title: {
              text: "Value",
              align: "low",
            },
            labels: {
              overflow: "",
            },
          },
          tooltip: {
            valueSuffix: "",
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true,
              },
            },
          },
          labels: {
            useHTML: true,
            formatter: function () {
              return `
                ${this.value}
                <div style="display: flex; justify-content: center; margin-top: 10px;">
                  <span style="color: #7cb5ec; font-size: 12px; margin-right: 10px;">
                    ⬤ Base
                  </span>
                  <span style="color: #f15c80; font-size: 12px;">
                    ⬤ Peak
                  </span>
                </div>`;
            },
          },
        
          credits: {
            enabled: false,
          },
          series: [
        {
            name: 'base',
            data: [250]
        },
        {
            name: 'peak',
            data: [150]
        }
    ]

        },
      };
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    margin-top: 20px;
    max-width: 100% !important;
  }
  </style>
  