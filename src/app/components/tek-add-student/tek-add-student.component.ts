import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/tekStudentModel';
import {  TekServicesAddStudentService    } from '../../services/tek-services-add-student.service';

//opciones de datatables
  /*
declare let $: any;
*/



@Component({
  selector: 'app-tek-add-student',
  templateUrl: './tek-add-student.component.html',
  styleUrls: ['./tek-add-student.component.css']
})
export class TekAddStudentComponent implements OnInit {
  students: Student[] = [];
  personStudent = new Student();
  display1:string = 'none';
  
  //opciones de datatables
  /*
  data = [];
  dtOptions: any = {};
  */

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

  constructor(private httpService: TekServicesAddStudentService) { }





  ngOnInit(): void {
    //this.refreshTekStudent()
    
  }


  
  refreshTekStudent() {
    this.httpService.getTekStudent()
      .subscribe(data => {
        console.log('Exito',data)
        this.students=data;
        
      })      
 
  }




/*
  
refreshTekStudent() {
  this.httpService.getTekStudent().subscribe((ret1: Student[])=>{
      
    this.students= ret1;
   
    setTimeout(()=>{                          
      $('#datatablehowarts').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"desc"]]} );
    }, 1);
    
    
});

}
*/


  addTekStudent1() {
    this.httpService.addTekStudent(this.personStudent)
      .subscribe(data => {
        console.log(data)
        this.refreshTekStudent();
        this.display1 = 'block';
      })      
  }



}//finclase
