import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
  msg: string;
  @ViewChild('msg') messageReference;
  @Output()
  sendMsg = new EventEmitter<string>();

  @Output() attach = new EventEmitter<string>();

  constructor() {
    this.msg = 'dfdf';
  }

  ngOnInit(): void {}

  sendMessage(event) {
    //console.log(event.target.value);
    this.sendMsg.emit(event.target.value);
    this.messageReference.nativeElement.value = '';
  }
}
