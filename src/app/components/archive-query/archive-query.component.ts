import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/models/archive.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-archive-query',
  templateUrl: './archive-query.component.html',
  styleUrls: ['./archive-query.component.scss']
})
export class ArchiveQueryComponent implements OnInit {

  issuedEmployee: string;
  sum: string;
  archive: Archive[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeArchiveSeelction(this.issuedEmployee, this.sum).subscribe((data) => {
      console.log(data);
      this.archive = data;
    });
  }
}
