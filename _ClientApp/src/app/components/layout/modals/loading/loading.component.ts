import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilityService } from 'src/app/reusable/shared/utility.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingSpinnerComponent  {
  constructor(
    public dialogRef: MatDialogRef<LoadingSpinnerComponent>, 
    private _utilityService: UtilityService,
  ){
    this._utilityService.dialogRef = dialogRef;
  }

  close():void {
    this.dialogRef.close();
  }
}
