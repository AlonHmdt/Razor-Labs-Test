import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.css']
})
export class MessageThreadComponent implements OnInit, OnDestroy {
  messages = this.messageService.getMessages();

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.setNewMessageSub();
  }

  setNewMessageSub() {
    this.messageService.newMessage.subscribe((message) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.messageService.newMessage.unsubscribe();
  }


}
