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
     "name":"Население (/100000)",
     "data": [14.06111, 13.93727, 13.67398, 13.64374, 13.50896, 13.38736, 13.27845, 13.20140, 13.15005, 13.10473, 12.72468, 12.71006, 12.71030, 12.71719, 12.71697, 12.71771, 12.71324, 12.68210, 12.62648, 12.56501, 12.59612]
   },{
    "name":"Количество новорожденных (на 1000 чел.)",
    "data": [10.171,	11.258, 11.752, 12.296, 12.699, 12.291, 12.452, 13.085, 13.642, 14.315, 14.345, 14.144, 15.181, 15.325, 15.149, 15.461, 15.323, 13.309, 12.386, 11.172, 11.172]
  },{
    "name":"Скользящее среднее Количества новорожденных (на 1000 чел.)",
    "data": [11.060,11.769,12.249,12.429,12.481,12.609,13.060,13.681,14.101,14.268,14.556,14.883,15.218,15.311,15.311,14.697,13.7,12.3]							
  },{
    "name":"Смертность (на 1000 чел.)",
    "data": [17.9, 19.5, 20.3, 20.8, 20.0, 19.9, 18.3, 17.5, 17.4, 16.6, 17.2, 15.8, 15.9, 15.9, 15.6, 15.6, 15.7, 15.2, 14.9, 14.7, 14.7]
  },{
    "name":"Процент бедности",
    "data": [30.7, 26.8, 21.4, 19.2, 16.5, 17.2, 13.4, 14.8, 14.1, 15.6, 12.8, 13.4, 10.9, 10.6, 9.9, 10.5, 10.6, 10.9, 10.5, 10.3, 9.9]
  },{
    "name":"Скользящее среднее Смертность",
    "data": [19.2,20.2,20.4,20.3,19.4,18.6,17.7,17.2,17,16.5,16.3,15.8,15.7,15.6,16,16,15,15]
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