import { Message } from './Message.model';

export interface Contact {
  name: string;
  status: string;
  lastseen: string;
  profilepic: string;
  messages: Message[];
}
