import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { PersonsComponent } from './components/persons/persons.component';
//import { AddStudentComponent } from './components/add-student/add-student.component';
import { TekAddStudentComponent } from './components/tek-add-student/tek-add-student.component';
import { AgGridModule} from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
    StudentsComponent,
    TeachersComponent,
    PersonsComponent,
    //AddStudentComponent,
    TekAddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
