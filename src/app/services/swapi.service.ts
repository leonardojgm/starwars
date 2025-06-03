import { Injectable } from '@angular/core';
import { RetornoAPI } from '../models/retorno-api';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  url : string = 'https://swapi.py4e.com/api/';

  async get<T>(rota: string, search?: string, page?: number) : Promise<T> {
    let param = ''

    if (search && page) {
      param = `?search=${search}&page=${page}`
    } else if (search) {
      param = `?search=${search}`
    } else if (page) {
      param = `?page=${page}`
    }

    const response = await fetch(`${this.url}${rota}${param}`);

    return await response.json();
  }
}
