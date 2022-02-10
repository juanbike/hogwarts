import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher'
import { httpTeacher} from '../../services/service.teacher'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  Teachers: Teacher[] = [];

  
  //Ocultar la tabla
  display: string = 'none';

  constructor(private http: httpTeacher) { }

  public getTeacher(){
    this.display = 'block';
    this.http.getStaff().subscribe(
      data => {
        this.Teachers = data;
      }
      
    )
  }

  public hideTable(){
    this.display = 'none';
  }


  ngOnInit(): void {
  }

}
