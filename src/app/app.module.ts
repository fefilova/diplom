import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      HighchartsChartComponent  
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }