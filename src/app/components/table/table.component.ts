import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetTableService } from 'src/app/services/tables/get-table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditRecordModalComponent } from './add-edit-record-modal/add-edit-record-modal.component';
import { City } from 'src/app/models/city.model';
import { Archive } from 'src/app/models/archive.model';
import { Employee } from 'src/app/models/employee.model';
import { Client } from 'src/app/models/client.model';
import { Transport } from 'src/app/models/transport.model';
import { Posting } from 'src/app/models/posting.model';
import { Service } from 'src/app/models/service.model';
import { PostOffice } from 'src/app/models/postOffice.nodel';
import { AddEditRecordService } from 'src/app/services/addEditService/add-edit-record.service';

interface Table {
  query: string;
  viewValue: string;
  value: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  selectedValue: string;
  sourceData: Array<any>;
  keysObj: Array<any>;
  coloumnsDef: Array<any>;
  displayTable: boolean;

  tables: Table[] = [
    {query: 'city', viewValue: 'Міста', value: 'cities'},
    {query: 'client', viewValue: 'Клієнти', value: 'clients'},
    {query: 'archive', viewValue: 'Архів', value: 'archives'},
    {query: 'employee', viewValue: 'Працівники', value: 'employees'},
    {query: 'posting', viewValue: 'Відправлення', value: 'deliveries'},
    {query: 'office', viewValue: 'Поштові відділення', value: 'postOffices'},
    {query: 'service', viewValue: 'Послуги', value: 'services'},
    {query: 'transport', viewValue: 'Транспорт', value: 'transport'}
  ];

  constructor(public tableService: GetTableService,
              public dialog: MatDialog,
              private updateService: AddEditRecordService) { }

  ngOnInit(): void {
  }

  editRecord(tableType: string, record: any, type: any): any {
    const dialogRef = this.dialog.open(AddEditRecordModalComponent, {
      data: {
        tableType,
        record,
        type: 'edit'
      }
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(data => {
      this.fetchData(this.selectedValue);
    });
  }

  deleteRecord(tableType: string, record: any): any {
    // tslint:disable-next-line: deprecation
    this.updateService.deleteRecord(tableType, record).subscribe(() => {
      console.log('deleted');
      this.fetchData(this.selectedValue);
    });
  }

  addRecord(tableType: string): any {
    const keys = this.defineKeys(this.sourceData);
    const record = this.sourceData[0];
    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: forin
    for (let key in record) {
      record[key] = '';
    }

    console.log(record);

    const dialogRef = this.dialog.open(AddEditRecordModalComponent, {
      data: {
        tableType,
        record
      }
    });

    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(data => {
      this.fetchData(this.selectedValue);
    });
  }

  defineKeys(arr: Array<any>): any {
    const obj = arr[0];
    this.coloumnsDef = [...Object.keys(obj), 'actions'];
    return Object.keys(obj).map(el => {
      return {
        name: el,
        title: el.toUpperCase()
      };
    });
  }

  fetchData(tableType: string): any {
    // tslint:disable-next-line: deprecation
    this.tableService.getTable(tableType).subscribe(
      (data) => {
        this.sourceData = data;
        this.keysObj = this.defineKeys(data);
        console.log(data);
        setTimeout(() => { this.displayTable = true; }, 500);
      },
      () => {
        console.log('A шо таке');
      });
  }

  getTable(selectedValue: string): any {
    if (selectedValue) {
      this.fetchData(selectedValue);
    }
  }
}
