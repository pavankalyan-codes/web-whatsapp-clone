import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WhatsUp';
  a=10;
  faCoffee = faCoffee;
  showFiller = false;
  sideBarTitleLeft: Observable<string>;
  sideBarTitle: Observable<string>;
  sideBarMode: Observable<string>;
  sideBarBackdrop: Observable<boolean>;
  sideBarPosition: Observable<string>;
  @ViewChild('drawer') matDrawerRight: MatDrawer;
  @ViewChild('drawerLeft') matDrawerLeft: MatDrawer;
  divColor="#f6f6f6";
  hasBackdrop='side';


  constructor(private titleService: Title,private sidenavService: SideNavService){
    titleService.setTitle("WhatsUp");
    this.sideBarTitle=this.sidenavService.sideBarTitle$;
    this.sideBarMode=this.sidenavService.sideBarMode$;
    this.sideBarBackdrop=this.sidenavService.sideBarBackdrop$;
    this.sideBarPosition=this.sidenavService.sideBarPosition$;
    this.sideBarTitleLeft=this.sidenavService.sideBarTitleLeft$
    
  }

  ngAfterViewInit(): void {
    this.sidenavService.setRightDrawer(this.matDrawerRight);
    this.sidenavService.setLeftDrawer(this.matDrawerLeft)
  }

  get(){
    return 1233;
  }

  changeDivBg(value)
  {
    console.log('im in chnge');
    
    this.divColor=this.divColor==="#ffff"?"#f6f6f6":"#ffff"
  }

  closeLeftSideNav(){
    this.sidenavService.toggleLeft('','',false,'');
  }

  closeRightSideNav(){
    this.sidenavService.toggleRight('','',false,'');
  }
}
