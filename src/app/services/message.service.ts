import {EventEmitter, Injectable} from '@angular/core';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messages: Message[] = [
    {
      senderId: 1,
      recipientId: 2,
      time: '10:00:00 AM',
      message: 'asdasdasd asdakdalk aklsdj asd kasdl;b js asdjk io asdoqwem asdl;a as',
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      senderId: 1,
      recipientId: 2,
      time: '10:20:15 AM',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      senderId: 2,
      recipientId: 1,
      time: '02:20:00 PM',
      message: 'The point of using as asdkj kdls als,ai klal js',
      avatar: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'
    },
  ];

  public newMessage: EventEmitter<Message> = new EventEmitter<Message>();


  constructor() { }

  getMessages(): Message[] {
    return this.messages;
  }






}
