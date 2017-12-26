import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  //Message Service code

  messages: string[] = [];

  add(message: string){
  	 this.messages.push(message);
  }

  clear() {
  	this.messages = [];
  }
}
