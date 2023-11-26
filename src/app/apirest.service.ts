import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from './pregunta3/lista';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Lista[]>{
    return this.http.get<Lista[]>("https://rickandmortyapi.com/api/location");
  }
}
