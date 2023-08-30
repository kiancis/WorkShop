import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel } from '../../models/Base/base.models';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService<T extends BaseModel> {
  constructor(
    private http: HttpClient,
    @Inject('controller') private controller: string
  ) {}

  gets() {
    return this.http.get<T[]>(`${environment.baseUrl}${this.controller}`);
  }

  get(id: any) {
    return this.http.get<T>(`${environment.baseUrl}${this.controller}/${id}`);
  }

  post(entity: T) {
    return this.http.post(`${environment.baseUrl}${this.controller}`, entity);
  }

  put(entity: T) {
    return this.http.put(
      `${environment.baseUrl}${this.controller}/${entity.id}`,
      entity
    );
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}${this.controller}/${id}`);
  }
}
