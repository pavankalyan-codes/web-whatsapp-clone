import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-top-left-toolbar',
  templateUrl: './top-left-toolbar.component.html',
  styleUrls: ['./top-left-toolbar.component.scss']
})
export class TopLeftToolbarComponent implements OnInit {

  constructor(private sideNavService:SideNavService) { }

  ngOnInit(): void {
  }

  openContacts(){
    this.sideNavService.toggleLeft('New Chat','',false,'');
  }

}
