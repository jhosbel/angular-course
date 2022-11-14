import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    //this.empleados = this.empleadosService.empleados /* aca se inyecta en la clase para agregar los valores del metodo empleadosService que son los empleados nuevos */
  }

  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados => {
      console.log(misEmpleados)
      this.empleados = Object.values(misEmpleados)
      this.empleadosService.setEmpleados(this.empleados)
    })
  }

  empleados: Empleado[] = [] /* crear este array vacio para que la app pueda almacenar la informacion que se va a gregando, es el array de abajo que se paso al servicio pero aca esta vacio para poder agregar los nuevos empleados */

  /*   empleados:Empleado[] = [
  
      new Empleado("Jhosbel", "Vargas", "CEO", 4000),
      new Empleado("Gustavo", "Adolfo", "CEO", 4000),
      new Empleado("Jose", "Antonio", "CEO", 4000),
      new Empleado("Fernando", "Guerra", "Operario", 4000)
    ]; 
    array pasado a el servicio empleados.service.ts*/

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje('Nombre: ' + miEmpleado.nombre);
    /* this.empleados.push(miEmpleado); linea pasada a el servicio empleados.service.ts*/
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
  }

  cuadroNombre: string = ""
  cuadroApellido: string = ""
  cuadroCargo: string = ""
  cuadroSalario: number = 0

}
