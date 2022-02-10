import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class httpCharacter {
  Url: string = 'https://hp-api.herokuapp.com/api/characters/house/';
  casa: string = '';

  constructor(private http: HttpClient) {}

  getHouse(casa: string): Observable<Character[]> {
    return this.http.get<Character[]>(this.Url + casa);
  }
}