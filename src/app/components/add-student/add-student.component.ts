import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/studentModel';
import {  StudentService    } from '../../services/service.addStudent';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

 //representación del modelo de datos
students: Student[] = [];
errorMessage = '';
studentName = '';
student = {id: 0, name: '', yearOfBirth: '0', patronus: '', image: 'string'};
//student ={name: this.students[0].name, yearOfBirth: this.students[0].yearOfBirth, patronus: this.students[0].patronus, image: this.students[0].image }
modelStudent = new Student();

loading = true;

//Validadores para el formulario
  addStudentForm = new FormGroup({
    name: new FormControl('',Validators.required),
    patronus: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    urlImage: new FormControl('', Validators.required),

  });


// Mostrar mensajes de error

get nameControl(): FormControl {
  return this.addStudentForm.get('name') as FormControl;
}

get patronusControl(): FormControl {
  return this.addStudentForm.get('patronus') as FormControl;
}

 

  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    
    this.fetchStudents();
  }

 
// recupera datos
fetchStudents() {
  this.studentService.getStudentWithObservable().subscribe({
    next: (response) => {
      console.log('Respuesta recivida');
      console.log(response)
      this.students = response;
  },
  complete: () => {
    console.error('solicitud completada');
    this.loading = false;
  },
  error: (err: Error) => {
    console.error('Solicitud fallada con error');
    //this.errorMessage = Error;
    console.log('Error', this.errorMessage);
  
  }}); // fin subscribe
} 

addStudent() {
  this.studentService.addStudentWithObservable(this.modelStudent).subscribe({
    next: (response) => {
      this.fetchStudents();
      this.reset();
      this.studentName = this.student.name;
      console.log('Respuesta recivida');
      console.log(response);
      
   },
   complete: () => {
    console.error('solicitud completada');
    this.loading = false;
  },
  error: (err: Error) => {
    console.error('Solicitud fallada con error');
    //this.errorMessage = Error;
    console.log('Error', this.errorMessage);
  
  }
  }) //finSubscribe
     
}//finAddStudent





/*
 Después de agregar estudiante, buscaremos todos los estudiantes para mostrarlos en la interfaz de usuario. 
 Para asegurarnos de obtener estudiantes solo después de agregar un estudiante, debemos llamar al método
 fetchStudents()  dentro del método subscribe().

*/


private reset() {
  this.student.id = 0;
  this.student.name = '';
  this.student.image = '';
  this.student.patronus = '';
  this.student.yearOfBirth = '';
  this.errorMessage = '';
  this.studentName = '';
}





  

}//finclase
