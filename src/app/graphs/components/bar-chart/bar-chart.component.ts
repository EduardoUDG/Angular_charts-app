import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  // public barChartType: ChartType = 'line';

  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#8979F7', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#D7F76D', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#F760BB', hoverBackgroundColor: 'red' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values

    this.barChartData.datasets[0].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData.datasets[1].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    // this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100), 59, 80,
    //   Math.round(Math.random() * 100), 56,
    //   Math.round(Math.random() * 100), 40,
    // ];

    this.chart?.update();
  }

}
