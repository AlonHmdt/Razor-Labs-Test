import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private API_URL = 'https://some.3rd.party/send/sms';

  constructor(private http: HttpClient) { }

  send(message: Message): boolean {
    return true;
    this.http.post(this.API_URL, {params: message})
      .pipe(
        map((response: any) => {
          console.log('submitted');
          return true;
        })
      );
  }




}
