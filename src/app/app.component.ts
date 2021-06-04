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
   "credits": { "enabled": false},
   "title": { "text": "Социально-демографическая статистика" },
   "xAxis": {
     "categories": ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011" , "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
  },
   "series": [{
     "name":"Население / 100",
     "data": [14061.11, 13937.27, 13673.98, 13643.74, 13508.96, 13387.36, 13278.45, 13201.40, 13150.05, 13104.73, 12724.68, 12710.06, 12710.30, 12717.19, 12716.97, 12717.71, 12713.24, 12682.10, 12626.48, 12565.01, 12596.12]
   },{
    "name":"Количество новорожденных",
    "data": [10171, 11258, 11752, 12296, 12699, 12291, 12452, 13085, 13642, 14315, 14345, 14144, 15181, 15325, 15149, 15461, 15323, 13309, 12386, 11172, 11172]
  },{
    "name":"Количество бедных / 10",
    "data": [43167.6, 37351.9, 29262.3, 26196.0, 22289.8, 23026.3, 17793.1, 19538.1, 18541.6, 20443.4,
       16287.6, 17031.5, 13854.2, 13480.2, 12589.8, 13353.6, 13476.0, 13823.5, 13257.8, 12942.0, 12470.2]
  },{
    "name":"Процент бедности",
    "data": [30.7, 26.8, 21.4, 19.2, 16.5, 17.2, 13.4, 14.8, 14.1, 15.6, 12.8, 13.4, 10.9, 10.6, 9.9, 10.5, 10.6, 10.9, 10.5, 10.3, 9.9]
  },{
    "name":"Коэффициент Джини * 100",
    "data": [33.6, 34.3, 34.3, 36.2, 37.3, 37.6, 38.3, 38.0, 38.8, 38.1, 38.4, 37.7, 39.2, 39.3, 39.4, 38.7, 38.5, 37.3, 35.6, 35.7, 35.0]
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