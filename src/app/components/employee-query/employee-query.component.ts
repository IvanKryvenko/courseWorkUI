import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { QueryService } from 'src/app/services/queryService/query.service';

@Component({
  selector: 'app-employee-query',
  templateUrl: './employee-query.component.html',
  styleUrls: ['./employee-query.component.scss']
})
export class EmployeeQueryComponent implements OnInit {

  salary: string;
  workStartDate: Date;
  employee: Employee[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  makeSelection(): any {
    // tslint:disable-next-line: deprecation
    this.queryService.makeEmployeeSeelction(this.salary, `${this.workStartDate}T21:00:00.000Z`).subscribe((data) => {
      console.log(data);
      this.employee = data;
    });
  }

}
