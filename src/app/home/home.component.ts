import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  divColor="#f6f6f6";
  numbers=[];
  showFiller = false;
  constructor() { 
    this.numbers = Array(6).fill(4); // [4,4,4,4,4]
  }

  ngOnInit(): void {
  }

  changeDivBg(value)
  {
    console.log('im in chnge');
    
    this.divColor=this.divColor==="#ffff"?"#f6f6f6":"#ffff"
  }

}
