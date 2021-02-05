import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Message } from './models/Message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  chat = new BehaviorSubject<Message[]>([]);
  chat$ = this.chat.asObservable();

  messages: Message[] = [
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
  ];

  constructor() {}

  getMessages(): Observable<Message[]> {
    this.chat.next(this.messages);
    return this.chat$;
  }

  addMessages(msg) {
    let payload = {
      message: msg,
      date: Date.now() + '',
      self: 'true',
    };
  }

  changeChat(payload) {
    this.messages.splice(0, this.messages.length);
    this.messages.push(payload);
    this.chat.next(payload);
  }
}
