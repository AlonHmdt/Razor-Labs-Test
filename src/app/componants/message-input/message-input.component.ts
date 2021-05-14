import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {UserService} from '../../services/user.service';
import {HttpService} from '../../services/http.service';
import {MessageService} from '../../services/message.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {badWords} from '../../validators/bad-words.validator';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  messageForm: FormGroup;
  isTimeOutOn: boolean;
  clickCount = 0;
  allowedClickPerMinute = 10;

  buttonDisable: boolean;
  constructor(private userService: UserService, private httpService: HttpService, private messageService: MessageService,
              private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.messageForm = this.fb.group({
      messageContent: [null, [Validators.required, badWords()]],
    });
  }


  submit(): void {
    if (!this.isTimeOutOn) {
      this.timeOutInit();
    }
    if (this.clickCount === this.allowedClickPerMinute) {
      this.buttonDisable = true;
      return;
    }
    this.clickCount = this.clickCount + 1;
    if (this.isValid()) {
      const message = new Message();
      message.message = this.messageForm.get('messageContent').value;
      message.recipientId = 2;
      message.senderId = this.userService.getUserId();
      message.time = new Date().toLocaleTimeString();
      message.avatar = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

      if (this.httpService.send(message)) {
        this.messageService.newMessage.emit(message);
        this.messageForm.reset();
      }

    }
  }

  isValid(): boolean {
    if (this.messageForm.valid) {
      return true;
    }
  }


  timeOutInit(): void{
    this.isTimeOutOn = true;
    setTimeout(() => {
      this.isTimeOutOn = false;
      this.clickCount = 0;
      this.buttonDisable = false;
      }, 60000);
  }


}
