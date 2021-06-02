import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_customEvents from 'highcharts-custom-events';
HC_customEvents(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  optFromInputString: string = `
  {
   "title": { "text": "Highcharts chart" },
   "xAxis": {
     "categories": ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011" , "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
  },
   "series": [{
     "data": [30.7, 26.8, 21.4, 19.2, 16.5, 17.2, 13.4, 14.8, 14.1, 15.6, 12.8, 13.4, 10.9, 10.6, 9.9, 10.5, 10.6, 10.9, 10.5, 10.3, 9.9]
   }]
 }
  `;

  optFromInput: Highcharts.Options = JSON.parse(this.optFromInputString);
  updateFromInput: boolean = false;

  // Demonstrate chart instance
  logChartInstance(chart: Highcharts.Chart) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    this.optFromInput = JSON.parse(this.optFromInputString);
  }

  seriesTypes: {[key: string]: string} = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line'
  };

  toggleSeriesType(index: number = 0) {
    this.optFromInput.series[index].type =
      this.seriesTypes[this.optFromInput.series[index].type || 'line'] as
        'column' | 'scatter' | 'spline' | 'line';
    // nested change - must trigger update
    this.updateFromInput = true;
  }
}