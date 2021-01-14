import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.scss']
})
export class MydialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
