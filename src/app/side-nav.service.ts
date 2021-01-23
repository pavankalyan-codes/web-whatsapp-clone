import { Injectable } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  sideBarTitle: BehaviorSubject<string>=new BehaviorSubject<string>('');
  sideBarTitle$=this.sideBarTitle.asObservable();

  sideBarMode: BehaviorSubject<string>=new BehaviorSubject<string>('');
  sideBarMode$=this.sideBarMode.asObservable();

  sideBarBackdrop: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  sideBarBackdrop$=this.sideBarBackdrop.asObservable();

  sideBarPosition: BehaviorSubject<string>=new BehaviorSubject<string>('');
  sideBarPosition$=this.sideBarPosition.asObservable();

  sideBarTitleLeft: BehaviorSubject<string>=new BehaviorSubject<string>('');
  sideBarTitleLeft$=this.sideBarTitleLeft.asObservable();

  constructor() { }

  private matDrawerRight: MatDrawer;
  private matDrawerLeft: MatDrawer;


  setRightDrawer(drawer: MatDrawer)
  {
    this.matDrawerRight=drawer;
  }

  setLeftDrawer(drawer: MatDrawer)
  {
    this.matDrawerLeft=drawer;
  }

  toggleRight(title,mode,backdrop,pos) {
      this.matDrawerRight.toggle();
      if(title)
      {
        this.sideBarTitle.next(title);
        this.sideBarMode.next(mode);
        this.sideBarBackdrop.next(backdrop);
        this.sideBarPosition.next(pos);
      }
      
      
  }


  toggleLeft(title,mode,backdrop,pos){
    this.matDrawerLeft.toggle();
    if(title)
      {
        this.sideBarTitleLeft.next(title);
        this.sideBarMode.next(mode);
        this.sideBarBackdrop.next(backdrop);
        this.sideBarPosition.next(pos);
      }
  }
}
