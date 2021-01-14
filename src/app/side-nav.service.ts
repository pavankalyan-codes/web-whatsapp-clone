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

  constructor() { }

  private matDrawer: MatDrawer;

  setDrawer(drawer: MatDrawer) {
      this.matDrawer = drawer;
  }

  toggle(title,mode,backdrop,pos) {
      this.matDrawer.toggle();
      if(title)
      {
        this.sideBarTitle.next(title);
        this.sideBarMode.next(mode);
        this.sideBarBackdrop.next(backdrop);
        this.sideBarPosition.next(pos);
      }
      
      
  }
}
