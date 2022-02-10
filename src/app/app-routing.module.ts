import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { StudentsComponent } from './components/students/students.component';
//import { AddStudentComponent } from './components/add-student/add-student.component';
import { TekAddStudentComponent } from './components/tek-add-student/tek-add-student.component' 



const routes: Routes = [
  
  { path: 'Agregar', component: TekAddStudentComponent }
  
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
