import { Component, OnInit } from '@angular/core';
import { Transport } from 'src/app/models/transport.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-transport-query',
  templateUrl: './transport-query.component.html',
  styleUrls: ['./transport-query.component.scss']
})
export class TransportQueryComponent implements OnInit {

  releaseDate: Date;
  capacity: string;
  transport: Transport[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeTransportSeelction(`${this.releaseDate}T21:00:00.000Z`, this.capacity).subscribe((data) => {
      console.log(data);
      this.transport = data;
    });
  }

}
