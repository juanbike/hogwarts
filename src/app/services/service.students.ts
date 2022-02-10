import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root',
})
export class httpStudent {
  //Url: string = 'https://hp-api.herokuapp.com/api/characters/students';
  Url: string = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {}
  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.Url);
  }
}