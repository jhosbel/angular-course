import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  /* Angular no te va a dejar usar variables sin usar como abajo, para usar la variable de abajo hay que agregar a tsconfig.json en la raiz de proyecto, dentro de "compilerOptions": agregar esto "strictPropertyInitialization": false, 

  Decorador @input() sirve para conectar el componente padre al componente hijo.
  */

  @Input() i:Empleado;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = ['']

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica)
  }

}
