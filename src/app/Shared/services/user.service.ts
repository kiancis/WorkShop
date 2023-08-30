import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/Dtos/user.models';
import { ApiService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService<User> {
  constructor(http: HttpClient) {
    super(http, 'users');
  }
}
