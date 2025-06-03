import { Injectable } from '@angular/core';
import { RetornoAPI } from '../models/retorno-api';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  url : string = 'https://swapi.py4e.com/api/';

  async get<T>(rota: string) : Promise<T> {
    const response = await fetch(`${this.url}${rota}/`);
    
    return await response.json();
  }
}
