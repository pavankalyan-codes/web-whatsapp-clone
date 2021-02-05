import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { OpenModalService } from '../open-modal.service';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-top-right-toolbar',
  templateUrl: './top-right-toolbar.component.html',
  styleUrls: ['./top-right-toolbar.component.scss']
})
export class TopRightToolbarComponent implements OnInit {

  @Input() name;
  @Input() status;
  @Input() profilepic;

  constructor(private sideNavService:SideNavService,
              private openModalService:OpenModalService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSideNav(data)
  {
    console.log("called");
    
    this.sideNavService.toggleRight(data,"side","false","end");
  }
  
  search(data){
    this.sideNavService.toggleRight(data,"side","false","end");
  }

  openDialog(){

    const dialogRef = this.dialog.open(MydialogComponent, {
      width: '350px',
      data: {name: 'kalyan', animal: 'Lion'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
