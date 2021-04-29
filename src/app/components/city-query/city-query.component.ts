import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-city-query',
  templateUrl: './city-query.component.html',
  styleUrls: ['./city-query.component.scss']
})
export class CityQueryComponent implements OnInit {

  popularity: number;
  postOfficesCount: number;
  city: City[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeCitySelection(this.popularity, this.postOfficesCount).subscribe((data) => {
      console.log(data);
      this.city = data;
    });
  }
}
