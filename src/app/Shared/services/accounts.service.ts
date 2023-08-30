import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounts } from '../models/Dtos/accounts.models';
import { ApiService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class accountService extends ApiService<Accounts> {
  constructor(http: HttpClient) {
    super(http, 'accounts');
  }
}
