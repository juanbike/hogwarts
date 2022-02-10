import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root',
})
export class httpTeacher {
  Url: string = 'https://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient) {}

  getStaff(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.Url);
  }
}