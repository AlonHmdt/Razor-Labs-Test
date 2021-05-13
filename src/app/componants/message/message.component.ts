import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  loggedInUserId = this.userService.getUserId();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
