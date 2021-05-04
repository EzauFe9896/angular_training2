import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
articulo: Articulo = new Articulo();
  constructor(private http: HttpClient) { }

  leerNoticia(): Observable<Articulo[]>{
   return this.http.get<Articulo[]>('http://jsonplaceholder.typicode.com/posts')
  }
}
