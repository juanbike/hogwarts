import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student} from '../../models/students'
import { httpStudent } from '../../services/service.students'; '../../services/service.students'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 
  //representación del modelo de datos
  students: Student[] = [];

  //Creamos un emisor de eventos para que responda el padre briefcase
  /*
  Los datos viajan del hijo ((student) al padre (briefcase)
  Creamos un emisor de eventos (clicked) de tipo string, la propiedad clicked utiliza el decorador @Output
  */
  @Output() clicked = new EventEmitter<string>();
 
 
  

   

  //Ocultar la tabla
  display: string = 'none';
 
  constructor(private http: httpStudent) { }

  public getBachelor(){
    
      this.display = 'block';
   
    
    this.http.getStudents().subscribe(
      data => {
        this.students = data;
      }
      
    )
  }

  //Escondemos la tabla de los estudiantes
  public hideTable(){
    this.display = 'none';
  }

  //Procedimiento para emitir un evento al padre-briefcase
  hicistesClick(value: string) {
    this.clicked.emit(value);
  }

  ngOnInit(): void {
    //console.log(this.myinputMsg);  
  }

  



}
