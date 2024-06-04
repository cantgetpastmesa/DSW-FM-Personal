import { Component, Input, OnInit } from '@angular/core';
import { Serie } from './series';
import { SerieService } from './series.service';


@Component({
  selector: 'app-series',

  templateUrl: './series.component.html',

  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  average: number=0;

  constructor(private serieService: SerieService) { }

  getSeriesList() {

    this.serieService.getSeries().subscribe(series => {

      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeriesList();

    this.darAverage();
  }

  darAverage(){
    let total: number=0;

    console.log(this.series.length);

    for(let index=0; index< this.series.length; index++){

        let serie: Serie= this.series[index]

        total+=serie.seasons;
    }
    
    this.average=total/this.series.length
  }



}


