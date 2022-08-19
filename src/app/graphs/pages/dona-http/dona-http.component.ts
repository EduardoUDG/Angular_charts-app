import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit{

 // Doughnut
 doughnutChartLabels: string[] = [
  // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
];
 doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     {
      //  data: [ 350, 450, 100 ],
       data: [  ],
       backgroundColor: [
         '#0075ED',
         '#00BAF7',
         '#00E0DB'
       ]
     }
   ]
 };
 doughnutChartType: ChartType = 'doughnut';

 // events
 chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

 chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

  constructor(
    private _chartService: ChartsService
  ) { }

  ngOnInit(): void {
    this._chartService.getUsersSocialMedia()
      .subscribe( resp => {
        const labels = Object.keys( resp );
        const values = Object.values( resp );

        this.doughnutChartData = {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                '#0075ED',
                '#00BAF7',
                '#00E0DB'
              ]
            }
          ]
        }
      });
  }

}
