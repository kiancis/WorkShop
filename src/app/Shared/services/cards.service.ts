import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/Dtos/card.models';
import { ApiService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class cardService extends ApiService<Card> {
  constructor(http: HttpClient) {
    super(http, 'creditCards');
  }
}
