import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LineChartComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
   declarations: [
      LineChartComponent,
   ],
   imports: [
      BrowserModule,
      HighchartsChartModule, 
   ],
   providers: [],
   bootstrap: [LineChartComponent]
})
export class AppModule { }