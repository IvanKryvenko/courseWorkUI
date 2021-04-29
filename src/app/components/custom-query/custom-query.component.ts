import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-custom-query',
  templateUrl: './custom-query.component.html',
  styleUrls: ['./custom-query.component.scss']
})
export class CustomQueryComponent implements OnInit {

  employee: string;
  office: string;
  response: Array<any>;

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeCustomSelection(this.employee, this.office).subscribe((data) => {
      console.log(data);
      this.response = data;
    });
  }
}
