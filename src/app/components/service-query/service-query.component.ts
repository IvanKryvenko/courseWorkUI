import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-service-query',
  templateUrl: './service-query.component.html',
  styleUrls: ['./service-query.component.scss']
})
export class ServiceQueryComponent implements OnInit {

  servicePrice: string;
  serviceRating: string;
  service: Service[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeServiceSelection(this.servicePrice, this.serviceRating).subscribe((data) => {
      console.log(data);
      this.service = data;
    });
  }
}
