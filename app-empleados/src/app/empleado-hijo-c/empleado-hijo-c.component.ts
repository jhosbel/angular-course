import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

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
  //aca esta el constructor que sirve para poder mostrar la ventana alert cada ves que se ejecuta la funcion agregarCaracteristicas
  constructor(private miMensaje:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = ['']

  agregarCaracteristica(nuevaCaracteristica: string){
    this.miMensaje.muestraMensaje('Caracteristica: ' + nuevaCaracteristica) // agregar mensaje alert con el servicio creado antes, ver servicio-empleados.services.ts, agregar el servicio en el constructor de arriba
    this.arrayCaracteristicas.push(nuevaCaracteristica)
  }

}
