import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//import { Student } from '../models/students';
import { Student } from '../models/studentModel';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
  Url: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}
  
/*
  addStudent(student:Student): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(student);
    console.log(body)
    return this.http.post(this.Url, body,{'headers':headers})
  }
*/



/*
 Recuperamos estudiantes
*/
getStudentWithObservable(): Observable<Student[]>{
    return this.http.get(this.Url).pipe(
        map(this.extractData),
        catchError(this.handleErrorObservable)

    );
}

/*
Agreagmos estudiantes
*/

addStudentWithObservable(student: Student): Observable<Student> {
    let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    });
    const body=JSON.stringify(student);
    console.log(body);
    debugger
    return this.http.post(this.Url, student, { headers: httpHeaders }).pipe(
        map(this.extractData),
        catchError(this.handleErrorObservable)
    );
}


/*
Funciones de apoyo
*/

private extractData(res: any) {
    let body = res;
    return body;
}


private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
}


}

