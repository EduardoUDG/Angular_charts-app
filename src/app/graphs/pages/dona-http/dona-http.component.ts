import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private _chartService: ChartsService
  ) { }

  ngOnInit(): void {

  }

  getData() {
    this._chartService.getUsersSocialMedia()
      .subscribe( data => console.log(data) );
  }

}
