import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/tekStudentModel';
import {  TekServicesAddStudentService    } from '../../services/tek-services-add-student.service';

/*
declare let $: any;
*/

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {
  students: Student[] = [];
  personStudent = new Student();

  //opciones de datatables
  /*
  data = [];
  dtOptions: any = {};
*/


 display:string = 'Block';
 display1:string = 'none';

 constructor(private httpService: TekServicesAddStudentService) { }

  ngOnInit(): void {
    //this.refreshTekStudent()
    
  }

  escondePadre(clicked: string){
    this.display = 'none';
    this.display1 = 'Block';
       
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
        order:[[1,"desc"]]} 
        );
    }, 1);
    
    
});
}
*/







}//fin-class
