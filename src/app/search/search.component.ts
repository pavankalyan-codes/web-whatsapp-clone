import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() listenClick: EventEmitter<string>=new EventEmitter();
  @Input() placeholder: string;
  constructor() { }

  ngOnInit(): void {
  }
  
  clicked(){
    console.log('clicked')
    this.listenClick.emit("clicked");
  }

}
