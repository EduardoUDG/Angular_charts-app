import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarComponent } from './pages/bar/bar.component';
import { BarDoubleComponent } from './pages/bar-double/bar-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    BarComponent,
    BarDoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule
  ]
})
export class GraphsModule { }
