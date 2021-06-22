import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { Contact } from './models/Contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactsList = new BehaviorSubject<Contact[]>([]);
  contactsList$ = this.contactsList.asObservable();

  addMessage(index: any, event: any) {
    let updatedContacts = [...this.contacts];

    let payload = {
      message: event,
      date: Date.now() + '',
      self: 'true',
    };
    updatedContacts[index].messages.push(payload);
    this.contacts.splice(0, this.contacts.length);
    this.contacts = [...updatedContacts];
    this.contactsList.next(this.contacts);
    this.msgService.chat.next(this.contacts[index].messages);
  }
  getContacts(): Observable<Contact[]> {
    this.contactsList.next(this.contacts);
    return this.contactsList$;
  }
  contacts: Contact[] = [
    {
      name: 'Walter White',
      status: 'Online',
      lastseen: '1612455560279',
      profilepic:
        'https://i.insider.com/5dade9bc045a3139e8686c33?width=1136&format=jpeg',
      messages: [
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
          date: '1612455560279 ',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',

          date: '1612455560279 ',
          self: 'true',
        },
      ],
    },
    {
      name: 'Jessie Pinkman',
      status: 'Online',
      lastseen: '1612455560279',
      profilepic:
        'https://i.insider.com/5d9f3f5183486904582ee506?width=750&format=jpeg&auto=webp',
      messages: [
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
      ],
    },
    {
      name: 'Hank Schrader',
      status: 'Online',
      lastseen: '1612455560279',
      profilepic:
        'https://www.indiewire.com/wp-content/uploads/2019/07/BreakingBad_Hank.png?w=780',
      messages: [
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
          date: '1612455560279 ',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',

          date: '1612455560279 ',
          self: 'true',
        },
      ],
    },
    {
      name: 'Skyler',
      status: 'Online',
      lastseen: '1612455560279',
      profilepic:
        'https://media1.popsugar-assets.com/files/thumbor/aPVck-LrapTPZmBi0gMR-7WRhDg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/5fd095dfb8ed5e51_TCDBRBA_EC010/i/Anna-Gunn-Skyler-White.jpg',
      messages: [
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message: 'hello hi. how are you',
          date: '1612455560279 ',
        },
        {
          message: 'iam fine',
          date: '1612455560279 ',
          self: 'true',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
          date: '1612455560279 ',
        },
        {
          message:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',

          date: '1612455560279 ',
          self: 'true',
        },
      ],
    },
  ];

  constructor(private msgService: MessageService) {}
}
