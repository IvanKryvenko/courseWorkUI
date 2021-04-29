import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-client-query',
  templateUrl: './client-query.component.html',
  styleUrls: ['./client-query.component.scss']
})
export class ClientQueryComponent implements OnInit {

  age: number;
  deliveryCount: number;
  client: Client[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeClientSeelction(this.age, this.deliveryCount).subscribe((data) => {
      console.log(data);
      this.client = data;
    });
  }
}
