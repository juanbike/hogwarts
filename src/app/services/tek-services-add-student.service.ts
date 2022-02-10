import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Student } from '../models/tekStudentModel';

@Injectable({
  providedIn: 'root'
})
export class TekServicesAddStudentService {

  url: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getTekStudent(): Observable<Student[]> {
    console.log(this.url)
    return this.http.get<Student[]>(this.url)
   
  }

  addTekStudent(student:Student): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(student);
    console.log(body)
    return this.http.post(this.url, body,{'headers':headers})
  }



}//fin class
