import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditRecordService } from 'src/app/services/addEditService/add-edit-record.service';

@Component({
  selector: 'app-add-edit-record-modal',
  templateUrl: './add-edit-record-modal.component.html',
  styleUrls: ['./add-edit-record-modal.component.scss']
})
export class AddEditRecordModalComponent implements OnInit {

  objEntries: Array<any>;
  editData: Array<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private updateService: AddEditRecordService) { }

  ngOnInit(): void {
    this.objEntries = Object.entries(this.data.record);
    this.editData = this.data.record;
  }

  updateRecord(): any {
    console.log(this.editData);
    // tslint:disable-next-line: deprecation
    this.updateService.editRecord(this.data.tableType, this.editData).subscribe((data) => {
      console.log('All is fine');
    },
    (error) => {
      console.log(error);
    });
  }
}
