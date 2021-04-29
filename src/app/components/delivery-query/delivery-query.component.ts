import { Component, OnInit } from '@angular/core';
import { Posting } from 'src/app/models/posting.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-delivery-query',
  templateUrl: './delivery-query.component.html',
  styleUrls: ['./delivery-query.component.scss']
})
export class DeliveryQueryComponent implements OnInit {

  deliveryType: string;
  deliveryTime: string;
  delivery: Posting[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeDeliverySeelction(this.deliveryTime, this.deliveryType).subscribe((data) => {
      console.log(data);
      this.delivery = data;
    });
  }
}
