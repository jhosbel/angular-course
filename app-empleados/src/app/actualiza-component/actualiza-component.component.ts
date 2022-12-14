import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  constructor(private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService, private route: ActivatedRoute) { }

  empleados: Empleado[] = []

  accion: number

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion'])
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'] //aca esta el indice de cada empleado
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice) /*el metodo encontrarEmpleado fue creado en el archivo empleados.servece.ts ya que usa el servicio */
    this.cuadroNombre = empleado.nombre
    this.cuadroApellido = empleado.apellido
    this.cuadroCargo = empleado.cargo
    this.cuadroSalario = empleado.salario
  }

  volverHome() {
    this.router.navigate([""])
  }

  /* actualizarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleadosService.actualizaEmpleado(this.indice, miEmpleado)
    this.router.navigate([""])
  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice)
    this.router.navigate([""])
  } */

  actualizarEmpleado() {
    if(this.accion == 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
      this.empleadosService.actualizaEmpleado(this.indice, miEmpleado)
      this.router.navigate([""])
    }else {
      this.empleadosService.eliminarEmpleado(this.indice)
      this.router.navigate([""])
    }
  }

  cuadroNombre: string = ""
  cuadroApellido: string = ""
  cuadroCargo: string = ""
  cuadroSalario: number = 0
  indice: number //variable que guarda el indice de cada empleado para luego enrutarlo
}
