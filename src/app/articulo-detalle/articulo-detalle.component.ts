import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
articulo: Articulo = new Articulo();
  constructor(private ArticuloInyectado: ArticulosService) { 
    this.articulo = this.ArticuloInyectado.articulo;
  }

  ngOnInit(){
  }

}
