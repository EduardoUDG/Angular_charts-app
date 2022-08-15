import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './pages/bar/bar.component';
import { BarDoubleComponent } from './pages/bar-double/bar-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bar',        component: BarComponent },
      { path: 'bar-double', component: BarDoubleComponent },
      { path: 'dona',       component: DonaComponent },
      { path: 'dona-http',  component: DonaHttpComponent },
      { path: '**',         redirectTo: 'bar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
