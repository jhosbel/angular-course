import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[] = [

    new Empleado("Jhosbel", "Vargas", "CEO", 4000),
    new Empleado("Gustavo", "Adolfo", "CEO", 4000),
    new Empleado("Jose", "Antonio", "CEO", 4000),
    new Empleado("Fernando", "Guerra", "Operario", 4000)
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado)
  }

  cuadroNombre:string = ""
  cuadroApellido:string = ""
  cuadroCargo:string = ""
  cuadroSalario:number = 0

}
