import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService,
    private Ruta: Router
    ) { }

  ngOnInit(){
    `this.articulos.push({
      titulo:'Curso de Angular',
      descripcion: 'Como clonar un repositorio de GitHub a nuestro computador para poder trabajar el proyecto desde cualquier lado y tener el repositorio localmente.',
      fecha: new Date(),
      usuario:  this.UsuarioInyectado.usuario.nombre + " " + this.UsuarioInyectado.usuario.apellido,
    }),
    this.articulos.push({
      titulo:'Curso de Laravel',
      descripcion: 'Como clonar un repositorio de GitHub a nuestro computador para poder trabajar el proyecto desde cualquier lado y tener el repositorio localmente.',
      fecha: new Date('04/14/2020'),
      usuario:  this.UsuarioInyectado.usuario.nombre + " " + this.UsuarioInyectado.usuario.apellido,
    }),
    this.articulos.push({
      titulo:'Curso de C#',
      descripcion: 'Como clonar un repositorio de GitHub a nuestro computador para poder trabajar el proyecto desde cualquier lado y tener el repositorio localmente.',
      fecha: new Date('05/04/2021'),
      usuario:  this.UsuarioInyectado.usuario.nombre + " " + this.UsuarioInyectado.usuario.apellido,
    })`

    this.ArticuloInyectado.leerNoticia().subscribe((articulosDesdeApi)=>{
      this.articulos = articulosDesdeApi;
    });
  }

  irDetalle(articulo: Articulo)
  {
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle')
  }

}
