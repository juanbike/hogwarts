import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';
import { httpCharacter } from '../../services/service.character';




@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
//Tabla
/*
columnDefs: [
  { headerName: 'ID', field: 'id' },
  { headerName: 'Nombre', field: 'name' },
  { headerName: 'Edad', field: 'yearOfBith' },
  { headerName: 'Imagen', field: 'image' }
];
*/


url: string = 'https://hp-api.herokuapp.com/api/characters/house/';
rowData: any;




  house: string = '';
//Datos de la lista desplegable
houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];


//Representación del modelo de datos a recuperar
Characters: Character[] =[];
 //Ocultar la tabla
 display: string = 'none';


  constructor(private http: httpCharacter) { }

  ngOnInit(): void {
    this.rowData.get(this.url)
  }

  public getHouse(event: any) {
    
    this.display = 'block';
    // actualizamos la pantalla
    this.house = event.target.value; //valor seleccionado de la lista
    //console.log('y aqui llego', this.house);
    this.http.getHouse(this.house).subscribe(
      (data) => {
        this.Characters = data;
      }
    
    );
  }


  public hideTable(){
    this.display = 'none';
  }




} //f-class
