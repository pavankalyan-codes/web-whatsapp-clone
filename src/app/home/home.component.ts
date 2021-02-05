import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { MessageService } from '../message.service';
import { Contact } from '../models/Contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  divColor = '#f6f6f6';
  numbers = [];
  showFiller = false;
  messages = [];
  disableScrollDown = false;
  contacts: Contact[];
  activeIndex = new BehaviorSubject<string>('');
  activeIndex$ = this.activeIndex.asObservable();
  index: any;

  name: string;
  status: string;
  profilepic: string;

  showDummy: boolean = true;
  constructor(
    private messsagesService: MessageService,
    private contactService: ContactsService
  ) {
    contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
    this.numbers = Array(6).fill(4); // [4,4,4,4,4]
    messsagesService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private onScroll() {
    let element = this.myScrollContainer.nativeElement;
    let atBottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (this.disableScrollDown && atBottom) {
      this.disableScrollDown = false;
    } else {
      this.disableScrollDown = true;
    }
  }

  private scrollToBottom(): void {
    if (this.disableScrollDown) {
      return;
    }
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  private getContactChat(index) {
    this.showDummy = false;
    this.activeIndex.next(index);
    this.index = index;
    let contact = this.contactService.contacts[index];
    let messages = contact.messages;
    this.name = contact.name;
    this.status = contact.status;
    this.profilepic = contact.profilepic;
    this.messsagesService.changeChat([...messages]);
    // let payload = this.contactService.getContacts[index];
    // this.messsagesService.changeChat(payload);
  }

  changeDivBg(value) {
    this.divColor = this.divColor === '#ffff' ? '#f6f6f6' : '#ffff';
  }

  sendMessage(event) {
    this.contactService.addMessage(this.index, event);
    //this.messsagesService.addMessages(event);
  }
}
