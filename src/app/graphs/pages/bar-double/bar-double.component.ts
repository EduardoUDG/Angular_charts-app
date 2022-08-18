import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-bar-double',
  templateUrl: './bar-double.component.html',
})
export class BarDoubleComponent {

  // Bar chart
  myBarChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      { data: [ 50, 50, 50, 50, 50, 50, 100], label: 'Series A', backgroundColor: '#8979F7', hoverBackgroundColor: 'red' },
      { data: [ 50, 50, 50, 50, 50, 50, 100], label: 'Series B', backgroundColor: '#D7F76D', hoverBackgroundColor: 'red' },
      { data: [ 50, 50, 50, 50, 50, 50, 100], label: 'Series C', backgroundColor: '#F760BB', hoverBackgroundColor: 'red' },
    ],
  };

}
