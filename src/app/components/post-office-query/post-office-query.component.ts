import { Component, OnInit } from '@angular/core';
import { Posting } from 'src/app/models/posting.model';
import { PostOffice } from 'src/app/models/postOffice.nodel';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-post-office-query',
  templateUrl: './post-office-query.component.html',
  styleUrls: ['./post-office-query.component.scss']
})
export class PostOfficeQueryComponent implements OnInit {

  weightLimit: string;
  workersCount: number;
  postOffice: PostOffice[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makePostOfficeSelection(this.weightLimit, this.workersCount).subscribe((data) => {
      console.log(data);
      this.postOffice = data;
    });
  }
}
