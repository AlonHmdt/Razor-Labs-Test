import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userId = 1;

  constructor() { }

  getUserId(): number {
    return this.userId;
  }




}
