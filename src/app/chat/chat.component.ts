import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() contact;
  @Input() checkActive: Observable<string>;
  @Input() contactIndex;
  index = -1;
  isActive = false;
  constructor() {}

  ngOnInit(): void {
    this.checkActive.subscribe((data) => {
      this.index = parseInt(data);
    });
  }

  contactClicked() {
    this.isActive = !this.isActive;
  }
}
