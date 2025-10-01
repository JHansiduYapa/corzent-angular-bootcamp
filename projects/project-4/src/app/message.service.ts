import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  messages$ = new BehaviorSubject<string[]>(this.messages); 
  // get all messages
  getMessages() {
    return [...this.messages];
  }

  // add a new message
  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next(this.messages);
  }

  constructor() { }
}
