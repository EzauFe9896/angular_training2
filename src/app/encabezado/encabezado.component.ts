import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public UsuarioInyectado: UsuarioService) { }

  ngOnInit(){
    console.log(this.UsuarioInyectado.usuario.nombre)
  }

  cambiarNombre(){
    this.UsuarioInyectado.usuario.nombre = "MyLove"
  }


}
